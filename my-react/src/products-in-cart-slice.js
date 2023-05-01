import { createSlice } from '@reduxjs/toolkit';

const productsInCart = createSlice({
  name: 'productInCartReducer',
  initialState: {},
  reducers: {
    addProuct: (state, action) => {
      state[action.payload.id] = {
        imageUrl: action.payload.imageUrl,
        price: action.payload.price,
        title: action.payload.title,
        count: action.payload.count,
      };
    },
    removeProduct: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addProuct, removeProduct } = productsInCart.actions;

export default productsInCart;
