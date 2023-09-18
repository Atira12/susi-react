import { Form, Image, Input } from "antd";
import React from "react";

export const LoginPageComponent: React.FC = () => {
  return (
    <div style={{ backgroundImage: "back.jpeg" }}>
      <Image src="logo.png" width={120} height={120} preview={false} />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          width: "20em",
          marginLeft: "45em",
          marginTop: "20em",
        }}
      >
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input placeholder="Username" type="text" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: " Password is required" }]}
          >
            <Input placeholder="Password" type="password" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
