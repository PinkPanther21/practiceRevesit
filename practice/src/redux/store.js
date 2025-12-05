import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productSlice'
// import imagesReducer from './imageSlice'


const store = configureStore({
  reducer: {
   
    products: productsReducer
  },
})

export default store