import { configureStore } from '@reduxjs/toolkit';
import productsInCart from 'Slices/productsInCartSlice';
import order from 'Slices/orderSlice';

export default configureStore({
  reducer: {
    cartReducer: productsInCart.reducer,
    orderReducer: order.reducer,
  },
});
