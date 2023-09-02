import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Anchor, AnchorProps, Button, Space } from "antd";
import styled from "styled-components";

const SpaceStyled = styled(Space)`
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const AnchorCategory = ({ items }: AnchorProps) => {
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
