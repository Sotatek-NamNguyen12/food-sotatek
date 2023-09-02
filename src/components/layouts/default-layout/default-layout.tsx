import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import { Breadcrumb } from "@/components";
import { Header } from "./header";
import { Footer } from "./footer";

const { Content } = Layout;

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};
