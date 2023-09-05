"use client";
import React from "react";
import { useGetMerchantDetail } from "@/app/[slug]/api/useGetMerchantDetail";
import { ListCategory } from "./components";
import { Spin } from "antd";

function MerChantDetail() {
  const { isLoading } = useGetMerchantDetail("5-C3C2T8MUVN4HLT");
  return (
    <Spin spinning={isLoading}>
      <ListCategory />
    </Spin>
  );
}

export default MerChantDetail;
