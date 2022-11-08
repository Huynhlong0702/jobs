import React from "react";

import { Form, Button, Input, Spin, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { createJob } from "../../features/job/jobSlice";

const { Option } = Select;

const AddJob = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { position, company, location, status, jobType } = values;
    dispatch(
      createJob({
        position,
        company,
        location,
        status,
        jobType,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const buttonText = isLoading ? <Spin /> : "Add new";
  return (
    <Form
      name="normal_login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      initialValues={{
        status: "interview",
        jobType: "internship",
      }}
    >
      <Form.Item
        name="position"
        rules={[{ required: true, message: "Please input your position!" }]}
      >
        <Input placeholder="Position" />
      </Form.Item>

      <Form.Item
        name="company"
        rules={[{ required: true, message: "Please input your company!" }]}
      >
        <Input placeholder="Company" />
      </Form.Item>

      <Form.Item
        name="location"
        rules={[{ required: true, message: "Please input your location!" }]}
      >
        <Input placeholder="Location" />
      </Form.Item>

      <Form.Item name="status" className="mb-1.5">
        <Select
          allowClear
          className="w-full mb-4"
          name="status"
          placeholder="Select a option"
        >
          <Option value="pending">Pending</Option>
          <Option value="interview">Interview</Option>
          <Option value="declined">Declined</Option>
        </Select>
      </Form.Item>
      <Form.Item name="jobType" className="mb-1.5">
        <Select
          allowClear
          className="w-full mb-4"
          name="jobType"
          placeholder="Select a option"
        >
          <Option value="full-time">Full-time</Option>
          <Option value="part-time">Part-time</Option>
          <Option value="remote">Remote</Option>
          <Option value="internship">Internship</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button m-0 bg-[#40a9ff]"
          disabled={isLoading}
        >
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddJob;
