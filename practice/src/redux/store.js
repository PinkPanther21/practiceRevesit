import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productSlice'
// import imagesReducer from './imageSlice'


const store = configureStore({
  reducer: {
    // images: imagesReducer,
    products: productsReducer
  },
})

export default store