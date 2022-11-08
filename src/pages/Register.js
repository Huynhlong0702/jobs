import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const TogglePage = styled.span`
  cursor: pointer;
`;

const Register = () => {
  const [isMember, setIsMember] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, user } = useSelector((store) => store.user);

  console.log(user);

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);

    const { email, password, username } = values;

    if (isMember) {
      console.log(isLoading, user, isMember);
      // login
      dispatch(
        loginUser({
          email,
          password,
        })
      );
      return;
    }
    // register
    dispatch(
      registerUser({
        name: username,
        email,
        password,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const toggleMember = () => {
    setIsMember(!isMember);
  };

  useEffect(() => {
    if (user) {
      // setTimeout(() => {
      navigate("/");
      // }, 3000);
    }
  }, [user, navigate]);

  const buttonText = isMember ? "Login" : "Register";

  return (
    <div className="h-screen bg-[#ecefee] items-center flex">
      <div className="w-[400px] max-w-full m-auto">
        <Form
          name="normal_login"
          className="login-form bg-white shadow-lg rounded px-8 pt-8 pb-8 mb-4"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <div className="form-title pb-10 text-center uppercase font-medium text-3xl text-[#1890ff]">
            {buttonText}
          </div>
          {!isMember ? (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          ) : (
            ""
          )}

          <Form.Item
            name="email"
            rules={[
              // {
              //   type: "email",
              //   message: "The input is not valid E-mail!",
              // },
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item className="mb-2">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button m-0 w-full bg-[#40a9ff]"
              disabled={isLoading}
            >
              {isLoading ? <Spin /> : buttonText}
            </Button>
          </Form.Item>
          <div>
            {!isMember ? "Already a member?" : "Not a member yet?"}

            <TogglePage
              onClick={toggleMember}
              className=" pl-1 text-[#40a9ff] hover:underline hover:text-[rgb(64,93,255)]"
            >
              {!isMember ? "Login" : "Register"}
            </TogglePage>
          </div>
        </Form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 LongDev. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
