import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import SearchFilterForm from "./Jobs/SearchFilterForm";
import Model from "./Jobs/Model";
import JobTable from "./Jobs/JobTable";
import { resetEditJob } from "../../features/job/jobSlice";

const AllJob = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
    dispatch(resetEditJob());
  };

  const onClose = () => {
    setOpen(false);
    setIsEdit(false);
    dispatch(resetEditJob());
  };

  return (
    <>
      <div className="mb-5 flex justify-between filter-list">
        <Button
          type="primary"
          onClick={showDrawer}
          className="mb-3 bg-[#40a9ff]"
        >
          Add New
        </Button>
        <SearchFilterForm className="flex" />
      </div>

      <JobTable setOpen={setOpen} setIsEdit={setIsEdit} />
      <Model
        onClose={onClose}
        setOpen={setOpen}
        open={open}
        isEdit={isEdit}
        buttonText={isEdit ? "Update" : "Add new"}
      />
    </>
  );
};

export default AllJob;
