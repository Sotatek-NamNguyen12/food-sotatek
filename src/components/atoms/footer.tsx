import { Layout } from "antd";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
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
      {`Food Delivery ©${year} Created by Sotatek`}
    </Layout.Footer>
  );
};
