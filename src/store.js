import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import jobReducer from "./features/job/jobSlice";
import testSlice from "./features/test/testSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobReducer,
    test_reducer: testSlice,
  },
});
