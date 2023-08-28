import React from "react";
import { useQuery } from "react-query";
import { getMerchantData } from "../api";

export function useGetMerchant() {
  const query = useQuery("merchant", getMerchantData);
  return query;
}
