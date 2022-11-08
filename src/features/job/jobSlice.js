import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getAllJobsThunk,
  createJobThunk,
  deleteJobThunk,
  updateJobThunk,
  getJobThunk,
} from "./jobThunk";

const initialJobFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOption: ["lastes", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  position: null,
  company: null,
  jobLocation: null,
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEdit: false,
  editJobId: "",
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  ...initialJobFilterState,
};

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (data, thunkAPI) => {
    return createJobThunk("/jobs", data, thunkAPI);
  }
);

export const deleteJob = createAsyncThunk(
  "jobs/deleteJob",
  async (data, thunkAPI) => {
    return deleteJobThunk(data, thunkAPI);
  }
);

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async (data, thunkAPI) => {
    console.log("jobs/updateJob", data);
    return updateJobThunk(data, thunkAPI);
  }
);

export const getJob = createAsyncThunk("job/getJob", async (data, thunkAPI) => {
  console.log("getJob createAsyncThunk", data);
});

export const getAllJobs = createAsyncThunk(
  "jobs/getAllJobs",
  async (_, thunkAPI) => {
    return getAllJobsThunk(_, thunkAPI);
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    handleEditJob: (state, { payload }) => {
      return {
        ...state,
        isEdit: true,
        ...payload,
      };
    },
    resetEditJob: (state, { payload }) => {
      return {
        ...state,
        isEdit: false,
        position: null,
        company: null,
        jobLocation: null,
        status: "pending",
        jobType: "full-time",
        ...payload,
      };
    },
  },
  extraReducers: {
    /* Get all jobs */
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      console.log("getAllJobs fulfilled", state.jobs, payload);
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.totalJobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`ERROR: ${payload}`);
    },
    /* Create job */
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, { payload }) => {
      toast.success(`Created successfully`);
      console.log("Created", payload);
      state.isLoading = false;
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },

    /* Update job */
    [updateJob.pending]: (state) => {
      state.isLoading = true;
    },
    [updateJob.fulfilled]: (state, { payload }) => {
      toast.success(`Updated successfully`);
      console.log("Updated updateJob", payload);
      // state.isLoading = false;

      return { ...state, isLoading: false, isEdit: false, ...payload };
    },
    [updateJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },

    /* Delete job */
    [deleteJob.fulfilled]: (state, { payload }) => {
      toast.success(`Deleted successfully`);
    },
    [deleteJob.rejected]: (state, { payload }) => {
      toast.error(`${payload}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleEditJob, resetEditJob } = jobSlice.actions;

export default jobSlice.reducer;
