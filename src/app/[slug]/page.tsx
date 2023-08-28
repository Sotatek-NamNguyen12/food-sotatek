"use client";
import React from "react";
import { useGetMerchant } from "@/app/[slug]/api/useGetMerchant";
import { ListCategory } from "@/components";

function MerChantDetail() {
  const { data, isSuccess } = useGetMerchant();
  return <div>{isSuccess && data && <ListCategory />}</div>;
}

export default MerChantDetail;
