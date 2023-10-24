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

import storage from 'redux-persist/lib/storage';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// наш апі з якого беремо редюсери
import { userSplitApi } from './features/userApi/fitnesApi';
import { tokenReducer } from './features/userToken';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: [tokenReducer.name],
};

const rootReducer = combineReducers({
  [userSplitApi.reducerPath]: userSplitApi.reducer,
  [tokenReducer.name]: tokenReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  userSplitApi.middleware,
];

// store
// -----------------------------------------
export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
// -----------------------------------------
setupListeners(store.dispatch);
export const persistor = persistStore(store);
