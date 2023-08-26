import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

const ListItemsBreadcrumb: ItemType[] = [
  { key: "home", breadcrumbName: "Home" },
];

export const Breadcrumb = () => {
  return (
    <AntdBreadcrumb
      style={{ margin: "16px 0" }}
      items={ListItemsBreadcrumb}
    ></AntdBreadcrumb>
  );
};
