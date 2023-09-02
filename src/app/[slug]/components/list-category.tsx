import React, { useMemo } from "react";
import { AnchorCategory } from "@/components";
import { useAppSelector } from "@/hooks/useStore";
import { AnchorProps } from "antd";
import { Category } from ".";

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
          zIndex: 1,
        }}
      >
        <AnchorCategory items={items} />
      </div>
      <div>
        <Category id="part-1" />
        <Category id="part-2" />
        <Category id="part-3" />
        <Category id="part-4" />
        <Category id="part-5" />
        <Category id="part-6" />
      </div>
    </>
  );
};
