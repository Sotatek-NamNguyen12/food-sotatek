import { Layout } from "antd";
import React from "react";
import Image from "next/image";
import LogoSotatek from "@/app/images/logo-sotatek.png";
import { MenuHeader } from "./menu-header";

export const Header = () => {
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Image
        src={LogoSotatek}
        alt="Logo Sotatek"
        height={50}
        style={{ filter: "brightness(500%)" }}
      /> */}
      <MenuHeader />
    </Layout.Header>
  );
};
