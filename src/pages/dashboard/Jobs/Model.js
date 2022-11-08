import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer, Space, Form, Input, Select } from "antd";
import { createJob, updateJob } from "../../../features/job/jobSlice";
const { Option } = Select;
const Model = ({ onClose, open, setOpen, buttonText }) => {
  const {
    isLoading,
    position,
    jobLocation,
    status,
    jobType,
    company,
    isEdit,
    _id,
  } = useSelector((store) => store.jobs);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    form
      .validateFields()
      .then((values) => {
        // do something with values
        const { position, company, location, status, jobType } = values;
        if (isEdit) {
          console.log("isedit ", position, company, location, status, jobType);
          dispatch(
            updateJob({
              position,
              company,
              jobLocation: location,
              status,
              jobType,
              _id,
            })
          );
        } else {
          dispatch(
            createJob({
              position,
              company,
              jobLocation: location,
              status,
              jobType,
            })
          );
        }
        setOpen(false);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  return (
    <Drawer
      title=""
      className="max-w-full"
      placement="right"
      width={500}
      onClose={onClose}
      open={open}
      footer={
        <Space>
          <Button
            type="primary"
            onClick={handleSubmit}
            className="bg-[#40a9ff]"
            // disabled={isLoading}
            htmlType="submit"
          >
            {buttonText}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Space>
      }
    >
      <Form
        form={form}
        name="normal_login"
        layout="vertical"
        initialValues={{
          status: isEdit && status ? status : "interview",
          jobType: isEdit && jobType ? jobType : "full-time",
          company: isEdit && company ? company : "",
          position: isEdit && position ? position : "",
          location: isEdit && jobLocation ? jobLocation : "",
        }}
      >
        <Form.Item
          name="position"
          rules={[
            { required: true, message: "Please input your position!!!!!" },
          ]}
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
      </Form>
    </Drawer>
  );
};

export default Model;
