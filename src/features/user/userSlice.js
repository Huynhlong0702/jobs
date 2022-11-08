import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
} from "./userThunk";

import { addUser, getUser, removeUser } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  collapsed: false,
  user: getUser(),
};

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state, { payload }) => {
      state.collapsed = !state.collapsed;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoading = false;
      removeUser();
    },
  },
  extraReducers: {
    /* Register */
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Created ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },

    /* update */
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUser(user);
      toast.success(`Updated ${user.name}`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },

    /* Login */
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUser(user);
      toast.success(`Wellcome ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logoutUser, toggleSidebar } = userSlice.actions;

export default userSlice.reducer;
