import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import { Breadcrumb, Footer, Header } from "@/components";

const { Content } = Layout;

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "64px 1fr 50px",
      }}
    >
      <Header />
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div style={{ padding: 24 }}>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};
