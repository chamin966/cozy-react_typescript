import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsInCartReducer from 'Slices/productsInCartSlice';
import orderReducer from 'Slices/orderSlice';
import tokenReducer from 'Slices/setTokenSlice';
import sessionStorage from 'redux-persist/es/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root', // 적용 시작 경로
  storage: sessionStorage,
  // 아래 배열의 요소는 rootReducer에 들어있는 리듀서들의 키값을 식별자로 사용함
  whitelist: ['cartReducer', 'orderReducer', 'tokenReducer'], // 새로 고침 시에 지워지면 안되는 데이터
  // blacklist: ['cartReducer', 'orderReducer', 'tokenReducer'], // 새로고침 시 지워져도 되는 데이터
};

const rootReducer = combineReducers({
  cartReducer: productsInCartReducer,
  orderReducer: orderReducer,
  tokenReducer: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
