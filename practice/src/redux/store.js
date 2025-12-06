import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productSlice'
import favReducer from './FavouriteSlice'  

const store = configureStore({
  reducer: {
    products: productsReducer,
    fav: favReducer,         
  },
})

export default store
