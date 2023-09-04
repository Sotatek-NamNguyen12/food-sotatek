"use client";
import React from "react";
import { useGetMerchantDetail } from "@/app/[slug]/api/useGetMerchantDetail";
import { ListCategory } from "./components";

function MerChantDetail() {
  const { data } = useGetMerchantDetail("5-C3C2T8MUVN4HLT");
  return <div>{data && <ListCategory />}</div>;
}

export default MerChantDetail;
