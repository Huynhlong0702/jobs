import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table, Space, Tag } from "antd";
import Moment from "react-moment";
import {
  deleteJob,
  getAllJobs,
  handleEditJob,
  updateJob,
} from "../../../features/job/jobSlice";

const JobTable = ({ setOpen, setIsEdit }) => {
  const { isLoading, jobs } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [isLoading]);

  const handleUpdate = (record) => {
    setIsEdit(true);
    console.log("record", record);
    setOpen(true);
    setIsEdit(true);
    dispatch(handleEditJob(record));
  };

  const handleDelete = (record) => {
    dispatch(
      deleteJob({
        _id: record?._id || record?.key || "",
      })
    );
  };
  const columns = [
    {
      title: "Job",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "jobLocation",
      key: "jobLocation",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => <Tag>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      key: "jobType",
      render: (_, { jobType }) => {
        let color = "success";
        if (jobType === "full-time") color = "processing";
        else if (jobType === "internship") color = "warning";
        return <Tag color={color}>{jobType.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Space size="middle" className="text-lg" align="end">
          <span
            onClick={() => {
              console.log("record", record);
              handleUpdate(record);
            }}
            style={{ cursor: "pointer" }}
          >
            <EditOutlined className="text-sky-500" />
          </span>
          <span
            onClick={() =>
              dispatch(
                deleteJob({
                  _id: record._id,
                })
              )
            }
            style={{ cursor: "pointer" }}
          >
            <DeleteOutlined className="text-red-400" />
          </span>
        </Space>
      ),
    },
  ];

  console.log(jobs?.jobs);
  return (
    <Table
      dataSource={jobs?.jobs}
      columns={columns}
      className="border"
      rowKey="_id"
      loading={isLoading}
      pagination={{
        hideOnSinglePage: true,
        defaultPageSize: 10, //10
        // showSizeChanger: true,
        // pageSizeOptions: ["2", "10", "20", "30"],
        total: jobs.totalJobs,
      }}
      scroll={{
        x: 1300,
        y: 700,
      }}
      onChange={(e) => console.log("change pagination", e)}
    />
  );
};

export default JobTable;
