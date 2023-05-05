import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAddPayload {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  count: number;
}

export interface IState {
  [id: string]: {
    imageUrl: string;
    price: number;
    title: string;
    count: number;
  };
}

export const initState: IState = {};

const productsInCart = createSlice({
  name: 'productInCartReducer',
  initialState: initState,
  reducers: {
    addProuct: (state, action: PayloadAction<IAddPayload>) => {
      const { id, imageUrl, price, title, count } = action.payload;
      state[id] = { imageUrl, price, title, count };
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { addProuct, removeProduct } = productsInCart.actions;

const productsInCartReducer = productsInCart.reducer;

export default productsInCartReducer;
