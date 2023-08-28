import { Layout } from "antd";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      {`Food Delivery ©${year} Created by Sotatek`}
    </Layout.Footer>
  );
};
