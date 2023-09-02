"use client";
import React from "react";
import { useGetMerchantDetail } from "@/app/[slug]/api/useGetMerchantDetail";
import { ListCategory } from "./components";

function MerChantDetail() {
  // const { data, isSuccess } = useGetMerchantDetail();
  return <div>{<ListCategory />}</div>;
}

export default MerChantDetail;
