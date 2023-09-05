import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Anchor, AnchorProps, Button, Space } from "antd";
import styled from "styled-components";

const SpaceStyled = styled(Space)`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-space-item {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const AnchorStyled = styled(Anchor)`
  overflow: auto;
  width: 100%;
  /* margin: 0 40px; */
  text-align: center;

  &::before {
    /* border-bottom: none; */
  }

  .ant-anchor {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const AnchorCategory = ({ items }: AnchorProps) => {
  return (
    <SpaceStyled>
      {/* <Button
        type="primary"
        icon={<LeftCircleOutlined />}
        style={{
          position: "absolute",
          left: "20px",
          top: 0,
        }}
      /> */}
      <AnchorStyled direction="horizontal" items={items} />
      {/* <Button
        type="primary"
        icon={<RightCircleOutlined />}
        style={{
          position: "absolute",
          right: "20px",
          top: 0,
        }}
      /> */}
    </SpaceStyled>
  );
};
