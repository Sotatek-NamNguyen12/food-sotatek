import { useLogin } from "@/api/auth/useLogin";
import { Button, Modal, Form, Input, Checkbox, MenuProps, Menu } from "antd";
import React, { useState } from "react";

export type AuthField = {
  username: string;
  full_name?: string;
  remember?: boolean;
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

  const onFinish = (values: AuthField) => {
    if (currentTab === ETab.REGISTER) {
      login.mutate(
        { username: values.username, full_name: values.full_name },
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

        {currentTab === ETab.REGISTER && (
          <Form.Item<AuthField>
            label="Full name"
            name="full_name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input />
          </Form.Item>
        )}

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
    </Modal>
  );
}
