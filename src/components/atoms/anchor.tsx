import { useAppSelector } from "@/hooks/useStore";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Anchor, AnchorProps, Button, Space } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";

const SpaceStyled = styled(Space)`
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const AnchorCategory = () => {
  const category = useAppSelector((state) => state.category.category);

  const items: AnchorProps["items"] = useMemo(() => {
    const data = category.map((item, index) => ({
      key: `${index + 1}`,
      href: `#${index + 1}`,
      title: item.name,
    }));
    return data;
  }, [category]);

  return (
    <SpaceStyled>
      <Button type="primary" icon={<LeftCircleOutlined />} />
      <Anchor
        direction="horizontal"
        items={items}
        style={{ overflow: "auto" }}
      />
      <Button type="primary" icon={<RightCircleOutlined />} />
    </SpaceStyled>
  );
};
