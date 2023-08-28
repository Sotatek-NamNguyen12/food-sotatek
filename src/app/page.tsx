"use client";

import { useGetMerchant } from "./api/useGetMerchant";

export default function Home() {
  const { data } = useGetMerchant();
  console.log(data);

  return (
    <div>
      <div>Nguyen Van Nam</div>
    </div>
  );
}
