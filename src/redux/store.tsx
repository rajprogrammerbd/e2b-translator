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
import loginSlice from './slice/login';
import storage from 'redux-persist/lib/storage';
import { RESET } from "./actions/resetReduxStore";

const persistConfig = {
  key: 'root',
  storage,
};

const appReducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  login: loginSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET) {
    localStorage.removeItem('persist:root');
    state = undefined;
  }

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