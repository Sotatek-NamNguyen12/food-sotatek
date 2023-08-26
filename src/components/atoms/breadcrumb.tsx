import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { BreadcrumbProps } from "antd/es/breadcrumb/Breadcrumb";

const ListItemsBreadcrumb: BreadcrumbProps["items"] = [
  { key: "home", title: "Home" },
];

export const Breadcrumb = () => {
  return (
    <AntdBreadcrumb style={{ margin: "16px 0" }} items={ListItemsBreadcrumb} />
  );
};
