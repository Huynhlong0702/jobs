import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  id: "",
};
const testSlice = createSlice({
  name: "test",
  initialState,
});
export default testSlice.reducer;
