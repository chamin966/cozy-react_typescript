import { configureStore } from '@reduxjs/toolkit';
import productsInCartReducer from 'Slices/productsInCartSlice';
import orderReducer from 'Slices/orderSlice';

export const store = configureStore({
  reducer: {
    cartReducer: productsInCartReducer,
    orderReducer: orderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
