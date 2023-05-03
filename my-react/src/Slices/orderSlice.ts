import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddPayload, IState } from './productsInCartSlice';

const order = createSlice({
  name: 'orderReducer',
  initialState: {},
  reducers: {
    addOrder: (state: IState, action: PayloadAction<IAddPayload>) => {
      const { id, imageUrl, price, title, count } = action.payload;
      state[id] = { imageUrl, price, title, count };
    },
    removeOrder: (state: IState, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { addOrder, removeOrder } = order.actions;

export default order;
