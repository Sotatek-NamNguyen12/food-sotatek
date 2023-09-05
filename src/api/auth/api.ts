import { AuthField } from "@/components/molecules/modal-login";
import { request } from "../config";
import { IResponseAuth } from "./types";

export const register = async (data: Omit<AuthField, "remember">) => {
  try {
    const response = await request<Omit<AuthField, "remember">, IResponseAuth>(
      "POST",
      "/v1/auth/register",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: Omit<AuthField, "remember">) => {
  try {
    const response = await request<Omit<AuthField, "remember">, IResponseAuth>(
      "POST",
      "/v1/auth/login",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
