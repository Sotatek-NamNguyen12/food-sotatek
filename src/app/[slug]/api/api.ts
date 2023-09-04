import { request } from "@/api/config";
import { MerchantResponse } from "./type";

export const getMerchantDetail = async (id: string) => {
  try {
    const response = await request<void, MerchantResponse>(
      "GET",
      `/v1/grab/merchant/${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
