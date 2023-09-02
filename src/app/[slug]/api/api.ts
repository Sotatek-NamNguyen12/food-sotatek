import { request } from "@/api/config";
import { MerchantResponse } from "./type";

export const getMerchantDetail = async () => {
  try {
    const response = await request<void, MerchantResponse>(
      "GET",
      "/fetch_merchant_data"
    );
    return response;
  } catch (error) {
    throw error;
  }
};
