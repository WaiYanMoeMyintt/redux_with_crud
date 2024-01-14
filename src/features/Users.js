import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Fakeuser";
export const userSlice = createSlice({
  name: "user",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.unshift(action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((items, index) => {
        if (items.id === action.payload.id) {
          items.name = action.payload.name;
        }
      });
    },
    deleteUser: (state, action) => {
        state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
