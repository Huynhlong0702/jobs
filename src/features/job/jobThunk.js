import customFetch from "../../utils/axios";
import { getAllJobs } from "./jobSlice";

export const createJobThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, data, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/jobs/${data._id}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateJobThunk = async (data, thunkAPI) => {
  console.log("update thunk api", data.record);

  // try {
  //   const resp = await customFetch.patch(
  //     `/jobs/${data.record._id}`,
  //     data.record,
  //     {
  //       headers: {
  //         authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
  //       },
  //     }
  //   );
  //   console.log("update");
  //   return resp.data;
  // } catch (error) {
  //   // return thunkAPI.rejectWithValue(error.response.data.msg);
  // }
};

export const getJobThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customFetch.get(`${url}${data?._id}`, data, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllJobsThunk = async (data, thunkAPI) => {
  try {
    let url = "/jobs";
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
