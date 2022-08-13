import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loginApi } from "./services/loginApi";
import loginSlice, { initialState } from './slice/login';
import storage from 'redux-persist/lib/storage';
import Cookies from "js-cookie";
import { RESET } from "./actions/resetReduxStore";

export const persistConfig = {
  key: 'root',
  storage,
};

const appReducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  login: loginSlice,
});

const rootReducer = (state: any, action: any) => {
  /*
  if (action.type === RESET) {
    // Cookies.remove('LOGIN_ACCESS_COOKIE');
    // storage.removeItem('root');
    state = initialState;
  }
  */

  return appReducers(state, action);
};

export default rootReducer;

const persistedReducer = persistReducer(persistConfig, appReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loginApi.middleware),
});

export const persistorStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);