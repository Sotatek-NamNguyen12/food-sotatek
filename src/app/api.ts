import axiosConfig from "@/api/config";

export const getMerchantData = async () => {
  try {
    const response = await axiosConfig.get<any>("/fetch_merchant_data");
    return response;
  } catch (error) {
    throw error;
  }
};
