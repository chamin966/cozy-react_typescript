import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddPayload, initState } from './productsInCartSlice';

const order = createSlice({
  name: 'orderReducer',
  initialState: initState,
  reducers: {
    addOrder: (state, action: PayloadAction<IAddPayload>) => {
      const { id, imageUrl, price, title, count } = action.payload;
      state[id] = { imageUrl, price, title, count };
    },
    removeOrder: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

const orderReducer = order.reducer;

export const { addOrder, removeOrder } = order.actions;

export default orderReducer;
