import { Form, Input, Button, Select } from "antd";
import React from "react";

const { Option } = Select;

function SearchFilterForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Filter", values);
    form.resetFields();
  };

  const onReset = () => {
    console.log("Rest form");
    form.resetFields();
  };
  return (
    <Form form={form} onFinish={onFinish} className="flex justify-end">
      <Form.Item name="keyword" className="flex mr-2 mb-2">
        <Input placeholder="Search..." />
      </Form.Item>
      <Form.Item name="jobStatus" className="flex mr-2 mb-2">
        <Select placeholder="Status" allowClear className="min-w-[120px]">
          <Option value="interview">Interview</Option>
          <Option value="pending">Pending</Option>
          <Option value="declined">Declined</Option>
        </Select>
      </Form.Item>
      <Form.Item name="jobOptions" className="flex mr-2 mb-2">
        <Select placeholder="Types" allowClear className="min-w-[120px]">
          <Option value="full-time">Full-time</Option>
          <Option value="part-time">Part-time</Option>
          <Option value="remote">Remote</Option>
          <Option value="internship">Internship</Option>
        </Select>
      </Form.Item>
      <Form.Item name="sort" className="flex mr-2 mb-2">
        <Select placeholder="Sort" allowClear className="min-w-[120px]">
          <Option value="lastes">Lastes</Option>
          <Option value="oldest">Oldest</Option>
          <Option value="a-z">A-Z</Option>
          <Option value="z-a">Z-A</Option>
        </Select>
      </Form.Item>
      <Button
        htmlType="submit"
        className="flex mr-2 mb-2 bg-[#40a9ff] text-white"
      >
        Filter
      </Button>
      <Button className="flex" onClick={onReset}>
        Clear
      </Button>
    </Form>
  );
}

export default SearchFilterForm;
