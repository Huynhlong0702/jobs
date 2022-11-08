import { useState } from "react";
import { Form, Button, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

const ProFile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const [isChange, setIsChange] = useState(true);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { lastName, email, location, name } = values;
    dispatch(updateUser({ lastName, email, location, name }));
    setIsChange(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const buttonText = isLoading ? <Spin /> : "Save";

  console.log("profile", user);

  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return (
    <div>
      <Form
        initialValues={{
          lastName: user?.lastName,
          email: user?.email,
          location: user?.location,
          name: user?.name,
        }}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        onValuesChange={() => setIsChange(false)}
      >
        <Form.Item
          name="lastName"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("lastName").length < 3) {
                  return Promise.reject(
                    "Please input your last name && must be minimum 3 characters."
                  );
                }
                if (format.test(getFieldValue("lastName"))) {
                  return Promise.reject("Special characters.");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Please input your last username!" },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" disabled={true} />
        </Form.Item>
        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please input your location!" }]}
        >
          <Input placeholder="location" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button m-0 bg-[#40a9ff]"
            disabled={isLoading || isChange}
          >
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProFile;
