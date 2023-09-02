import React, { ComponentPropsWithoutRef } from "react";
import { Col, Row } from "antd";
import { ItemProduct } from ".";

export const Category: React.FC<ComponentPropsWithoutRef<"div">> = ({
  ...divProps
}: ComponentPropsWithoutRef<"div">) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      padding: "10px 0",
    }}
    {...divProps}
  >
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <ItemProduct />
      </Col>
      <Col span={8}>
        <ItemProduct />
      </Col>
      <Col span={8}>
        <ItemProduct />
      </Col>
    </Row>
  </div>
);
