import { useLogin, useRegister } from "@/api/auth/useAuth";
import {
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  MenuProps,
  Menu,
  Spin,
} from "antd";
import React, { useState } from "react";

export type AuthField = {
  username: string;
  password: string;
  remember: boolean;
};

enum ETab {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

const items: MenuProps["items"] = [
  {
    label: "Đăng nhập",
    key: ETab.LOGIN,
  },
  {
    label: "Đăng kí",
    key: ETab.REGISTER,
  },
];

interface IModalLogin {
  open: boolean;
  handleClose: () => void;
}

export function ModalLogin({ open, handleClose }: IModalLogin) {
  const [currentTab, setCurrentTab] = useState<ETab>(ETab.LOGIN);
  const login = useLogin();
  const register = useRegister();

  const onFinish = (values: AuthField) => {
    if (currentTab === ETab.REGISTER) {
      register.mutate(
        { username: values.username, password: values.password },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
    } else {
      login.mutate(
        { username: values.username, password: values.password },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTab(e.key as ETab);
  };

  return (
    <Modal open={open} footer={null} closable={false}>
      <Spin spinning={login.isLoading || register.isLoading}>
        <Menu
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
          mode="horizontal"
          defaultSelectedKeys={[currentTab]}
          onClick={onClick}
          items={items}
        />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, marginTop: "20px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item<AuthField>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<AuthField>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<AuthField>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
