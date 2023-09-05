import { Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const itemStyle: MenuProps["style"] = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  fontSize: "16px",
};

const items: MenuProps["items"] = [
  {
    label: "Trang chủ",
    key: "/",
    style: itemStyle,
  },
  {
    label: "Cửa hàng",
    key: "/store",
    style: itemStyle,
  },
];

export const MenuHeader = () => {
  const router = useRouter();
  const [current, setCurrent] = useState<string>("/");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };
  return (
    <Menu
      style={{
        width: "100%",
        margin: "0 20px",
        display: "flex",
        justifyContent: "center",
        height: "50px",
        gap: 10,
      }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[current]}
      onClick={onClick}
      items={items}
    />
  );
};
