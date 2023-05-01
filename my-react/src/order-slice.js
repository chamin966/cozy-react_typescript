import { createSlice } from '@reduxjs/toolkit';

const order = createSlice({
  name: 'orderReducer',
  initialState: {},
  reducers: {
    addOrder: (state, action) => {
      state[action.payload.id] = {
        imageUrl: action.payload.imageUrl,
        price: action.payload.price,
        title: action.payload.title,
        count: action.payload.count,
      };
    },
    removeOrder: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addOrder, removeOrder } = order.actions;

export default order;
