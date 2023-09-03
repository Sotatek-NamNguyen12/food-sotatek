import React, { ComponentPropsWithoutRef } from "react";
import { Col, Row } from "antd";
import { ItemProduct } from ".";
import { Category as ICategory } from "../api/type";
import styled from "styled-components";

const HeaderCategory = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #1c1c1c;
  text-align: left;
  padding: 30px 0 20px;
`;

interface CategoryProps extends ComponentPropsWithoutRef<"div"> {
  category: ICategory;
}

export const Category: React.FC<CategoryProps> = ({
  category,
  ...divProps
}: CategoryProps) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
      }}
      {...divProps}
    >
      <HeaderCategory>{category.name}</HeaderCategory>
      <Row gutter={[16, 16]}>
        {category.items.map((item) => (
          <Col key={item.ID} span={8}>
            <ItemProduct product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
