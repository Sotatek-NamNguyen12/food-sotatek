import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { BreadcrumbProps } from "antd/es/breadcrumb/Breadcrumb";

const ListItemsBreadcrumb: BreadcrumbProps["items"] = [
  { key: "home", title: "Home" },
];

export const Breadcrumb = () => {
  return (
    <AntdBreadcrumb
      style={{
        padding: "16px",
        position: "sticky",
        top: "64px",
        zIndex: 1,
        background: "white",
      }}
      items={ListItemsBreadcrumb}
    />
  );
};
