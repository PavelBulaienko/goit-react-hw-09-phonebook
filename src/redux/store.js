import { configureStore, getDefaultMiddleware, createReducer } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { actions } from './actions';
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
import authReducer from './auth/auth-reducer';

import storage from 'redux-persist/lib/storage';

const contacts = [];

const reducer = createReducer(contacts, {
  [actions.fetchContactSuccess]: (_, { payload }) => {
    return { items: payload };
  },
  [actions.addContactSuccess]: ({ items }, { payload }) => {
    return { items: [...items, payload] };
  },
  [actions.deleteContactSuccess]: ({ items }, { payload }) => {
    return { items: [...items.filter((contact) => contact.id !== payload)] };
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    authReducer: persistReducer(authPersistConfig, authReducer),
    contacts: reducer,
    filter,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const persistorAndStore = { store, persistor };

export default persistorAndStore;
