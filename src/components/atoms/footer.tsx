import { Layout } from "antd";
import React from "react";

export const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      Ant Design ©2023 Created by Sotatek
    </Layout.Footer>
  );
};
