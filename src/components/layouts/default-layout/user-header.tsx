import { IUser } from "@/router/private-router";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";

const StyleUserHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  height: 100%;
`;

export function UserHeader() {
  const useName = useMemo(() => {
    const user: IUser = JSON.parse(localStorage.getItem("user") as string);
    return user.username;
  }, []);

  return (
    <StyleUserHeader>
      <Badge count={99} overflowCount={10} color="blue">
        <ShoppingCartOutlined
          shape="square"
          style={{ fontSize: "30px", color: "white" }}
        />
      </Badge>
      <p>{useName}</p>
    </StyleUserHeader>
  );
}
