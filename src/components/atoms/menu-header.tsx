import { Menu } from "antd";
import React from "react";

export const MenuHeader = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={new Array(3).fill(null).map((_, index) => ({
        key: String(index + 1),
        label: `nav ${index + 1}`,
        onClick: () => console.log("click"),
      }))}
    />
  );
};
