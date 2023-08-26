import { Menu, MenuProps } from "antd";
import React, { useState } from "react";

enum EItem {
  HOME = "HOME",
  STORE = "STORE",
}

const itemStyle: MenuProps["style"] = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  fontSize: "16px",
};

const items: MenuProps["items"] = [
  {
    label: "Trang chủ",
    key: EItem.HOME,
    style: itemStyle,
  },
  {
    label: "Cửa hàng",
    key: EItem.STORE,
    style: itemStyle,
  },
];

export const MenuHeader = () => {
  const [current, setCurrent] = useState<EItem>(EItem.HOME);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key as EItem);
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
