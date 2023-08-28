import { Anchor } from "antd";
import React from "react";

export const AnchorCategory = () => {
  return (
    <Anchor
      direction="horizontal"
      items={[
        {
          key: "part-1",
          href: "#part-1",
          title: "Part 1",
        },
        {
          key: "part-2",
          href: "#part-2",
          title: "Part 2",
        },
        {
          key: "part-3",
          href: "#part-3",
          title: "Part 3",
        },
        {
          key: "part-4",
          href: "#part-4",
          title: "Part 4",
        },
        {
          key: "part-5",
          href: "#part-5",
          title: "Part 5",
        },
        {
          key: "part-6",
          href: "#part-6",
          title: "Part 6",
        },
      ]}
    />
  );
};
