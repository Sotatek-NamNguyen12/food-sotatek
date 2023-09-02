import { useAppSelector } from "@/hooks/useStore";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

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

type TypeButton = "INCREMENT" | "DECREMENT";

export const ItemProduct = () => {
  const item = useAppSelector(
    (state) => state.merchant.merchant.menu.categories[0].items[0]
  );

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

  console.log({ item });
  return (
    <Card hoverable bordered={false}>
      <Row
        style={{ display: "flex", flexDirection: "row", flexFlow: "nowrap" }}
      >
        <Col
          flex={item?.imgHref ? "150px" : "0px"}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Image
            width={120}
            height={120}
            src={item.imgHref}
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
            <Name>{item.name}</Name>
            {item?.description && <Description>{item.description}</Description>}
          </div>
          <ButtonWrapper>{handleRenderButton}</ButtonWrapper>
        </Col>
      </Row>
    </Card>
  );
};
