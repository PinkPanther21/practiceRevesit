import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch 10 anime images from waifu.pics
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page=1) => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);

    const data = await res.json();
    

    return data.data.map((anime) => ({
      title: anime.title,
      img: anime.images.jpg.large_image_url,
    }));
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
