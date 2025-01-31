import axios from "axios";

const { cookies } = require("next/headers");

function setCookie(name, value, days = 30) {
  if (typeof window === "undefined") {
    cookies.set({
      name,
      value,
      maxAge: days * 24 * 60 * 60,
    });
  }
}

function getCookie(name) {
  if (typeof window === "undefined") {
    const cookieStore = cookies();
    const token = cookieStore.get(name)?.value;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const value = `; ${document?.cookie}`;
    const parts = value?.split(`; ${name}=`);
    if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
  }
}
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const res = await getNewTokens();
        if (res?.response?.status === 200) {
          setCookie("accessToken", res?.response?.data.accessToken, 30);

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res?.response?.data.accessToken}`;
          return api(originalRequest);
        } else {
          setCookie("accessToken", "", 0);
          setCookie("refreshToken", "", 0);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error.response?.data);
  }
);

export default api;

export const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      {
        refreshToken,
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
