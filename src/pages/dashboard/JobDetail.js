import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllJobs } from "../../features/job/jobSlice";

const JobDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { isLoading, user, jobs } = useSelector((store) => store.jobs);
  //   console.log("job", jobs);

  const job = jobs.filter((job) => job._id == id);

  console.log(job);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [id]);
  return (
    <div>
      JobDetail {id}
      <div>
        <ul>
          <li>{job.company}</li>
          <li>{job.position}</li>
          <li>{job.jobType}</li>
          <li>{job.status}</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetail;
