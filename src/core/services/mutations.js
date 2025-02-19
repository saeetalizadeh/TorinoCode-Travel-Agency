import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";
import { setCookie } from "../utils/cookie";
import toast from "react-hot-toast";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};
const usePutTourBasket = () => {
  const mutationFn = (data) => api.put(`basket/${data.id}`);
  const onError = (error) => toast.error(error.message);
  return useMutation({ mutationFn, onError });
};

const usePostOrder = () => {
  const mutationFn = (data) => api.post(`order`, data.form);
  const onError = (error) => toast.error(error.message);
  return useMutation({ mutationFn, onError });
};
const usePutUserData = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put(`user/profile`, data);
  const onError = (error) => toast.error(error.message);
  const onSuccess = () => {
    toast.success("ایمیل با موفقیت اضافه شد!");
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onError, onSuccess });
};

export {
  useSendOtp,
  useCheckOtp,
  usePutTourBasket,
  usePostOrder,
  usePutUserData,
};
