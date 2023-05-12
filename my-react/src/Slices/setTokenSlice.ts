import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface tokenState {
  accessToken: string;
  refreshToken: string;
}

const initState = {
  accessToken: '',
  refreshToken: '',
};

const token = createSlice({
  name: 'orderReducer',
  initialState: initState,
  reducers: {
    setToken: (state, action: PayloadAction<tokenState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

const tokenReducer = token.reducer;

export const { setToken } = token.actions;

export default tokenReducer;
