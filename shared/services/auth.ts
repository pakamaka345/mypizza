import { axiosInstance } from "./instance";

export const getMe = async () => {
  return (await axiosInstance.get("/auth/me")).data;
};
