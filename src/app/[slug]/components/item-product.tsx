import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Item } from "../api/type";

const Name = styled.p`
  word-break: break-word;
  line-height: 1.5;
  font-weight: 400;
  font-size: 16px;
`;
const Description = styled.div`
  padding-top: 20px;
  color: #9a9a9a;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const StyledCard = styled(Card)`
  height: 100%;
  & > .ant-card-body {
    height: 100%;
  }
`;

type TypeButton = "INCREMENT" | "DECREMENT";

interface ItemProductProps {
  product: Item;
}

export const ItemProduct = ({ product }: ItemProductProps) => {
  const [count, setCount] = useState<number>(0);

  const handleCount = useCallback((type: TypeButton) => {
    if (type === "INCREMENT") {
      return setCount((preCount) => preCount + 1);
    }
    return setCount((preCount) => (preCount === 0 ? 0 : preCount - 1));
  }, []);

  const handleRenderButton = useMemo(() => {
    if (count) {
      return (
        <>
          <Button
            type="default"
            icon={<MinusOutlined />}
            onClick={() => handleCount("DECREMENT")}
          />
          <Name>{count}</Name>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleCount("INCREMENT")}
          />
        </>
      );
    }
    return (
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => handleCount("INCREMENT")}
      />
    );
  }, [count, handleCount]);

  return (
    <StyledCard hoverable bordered={false}>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "nowrap",
          height: "100%",
        }}
      >
        <Col
          flex={product?.imgHref ? "150px" : "0px"}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Image
            width={120}
            height={120}
            src={product.imgHref}
            alt=""
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Col>
        <Col
          flex={"auto"}
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            textAlign: "left",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <Name>{product.name}</Name>
            {product?.description && (
              <Description>{product.description}</Description>
            )}
          </div>
          <ButtonWrapper>{handleRenderButton}</ButtonWrapper>
        </Col>
      </Row>
    </StyledCard>
  );
};
