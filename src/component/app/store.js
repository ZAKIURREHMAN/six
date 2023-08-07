import {configureStore } from '@reduxjs/toolkit'
import cartReducr from '../feature/cartSlice'
export const store = configureStore({
    reducer:{
        allcart:cartReducr,
    },
})
