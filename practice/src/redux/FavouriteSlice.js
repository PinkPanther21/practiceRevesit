import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    : [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("fav", JSON.stringify(state.items));
    },
    removeFav: (state, action) => {
      const favData = state.items.filter(item=>item.id!=action.payload)
        state.items = favData
        localStorage.setItem('fav', JSON.stringify(favData))
      
    },
    clearFav: (state) => {
      state.items = [];
      localStorage.setItem("fav", JSON.stringify(state.items));
    }
  },
});

export const { addFav, removeFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
