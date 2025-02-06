import { useQuery } from "@tanstack/react-query";

import api from "../config/api";
import QueryString from "qs";

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};
const useGetAllTours = (page) => {
  const queryFn = () => api.get(`tour?page=${page}&limit=10`);
  const queryKey = ["all-tours", page];

  return useQuery({ queryFn, queryKey });
};
const useGetTours = (query) => {
  const url = "tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};
export { useGetUserData, useGetAllTours, useGetTours };
