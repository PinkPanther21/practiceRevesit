// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchHeroImage = createAsyncThunk(
//   "images/fetchHeroImage",
//   async () => {
//     const res = await fetch("https://api.jikan.moe/v4/top/anime");
//     const data = await res.json();

//     // pick a random anime cover
//     const randomAnime = data.data[Math.floor(Math.random() * data.data.length)];

//     return randomAnime.images.jpg.large_image_url;
//   }
// );

// const imageSlice = createSlice({
//   name: "images",
//   initialState: {
//     url: "",
//     status: "idle",
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHeroImage.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchHeroImage.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.url = action.payload;
//       });
//   },
// });

// export default imageSlice.reducer;
