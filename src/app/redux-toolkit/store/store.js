import { configureStore } from '@reduxjs/toolkit'
import  counterCart  from '../slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: counterCart,
  },
})