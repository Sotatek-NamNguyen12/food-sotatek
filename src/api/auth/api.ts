import { AuthField } from "@/components/molecules/modal-login";
import { request } from "../config";
import { IResponseRegister } from "./types";

export const register = async (data: Omit<AuthField, "remember">) => {
  try {
    const response = await request<AuthField, IResponseRegister>(
      "POST",
      "/v1/users",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
