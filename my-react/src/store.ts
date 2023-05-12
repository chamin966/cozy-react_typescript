import { configureStore } from '@reduxjs/toolkit';
import productsInCartReducer from 'Slices/productsInCartSlice';
import orderReducer from 'Slices/orderSlice';
import tokenReducer from 'Slices/setTokenSlice';

export const store = configureStore({
  reducer: {
    cartReducer: productsInCartReducer,
    orderReducer: orderReducer,
    tokenReducer: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
