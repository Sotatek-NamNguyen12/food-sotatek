import React, { useMemo } from "react";
import { AnchorCategory } from "@/components";
import { useAppSelector } from "@/hooks/useStore";
import { AnchorProps } from "antd";

export const ListCategory: React.FC = () => {
  const category = useAppSelector(
    (state) => state.merchant.merchant.menu.categories
  );
  const items: AnchorProps["items"] = useMemo(() => {
    const data = category.map((item, index) => ({
      key: `${index + 1}`,
      href: `#${index + 1}`,
      title: item.name,
    }));
    return data;
  }, [category]);
  return (
    <>
      <div
        style={{
          padding: "0px 20px 20px",
          background: "white",
          position: "sticky",
          top: "calc(64px + 54px)",
        }}
      >
        <AnchorCategory items={items} />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "rgba(51, 150, 51, 0.652)",
          }}
        />
        <div
          id="part-2"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "rgba(68, 68, 183, 0.672)",
          }}
        />
        <div
          id="part-3"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "#FFFBE9",
          }}
        />
        <div
          id="part-4"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "#F4EAD5",
          }}
        />
        <div
          id="part-5"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "#DAE2B6",
          }}
        />
        <div
          id="part-6"
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            background: "#CCD6A6",
          }}
        />
      </div>
    </>
  );
};