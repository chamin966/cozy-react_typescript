import { configureStore } from '@reduxjs/toolkit';
import productsInCart from './products-in-cart-slice';
import order from './order-slice';

export default configureStore({
  reducer: {
    cartReducer: productsInCart.reducer,
    orderReducer: order.reducer,
  },
});
