import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';

const Reducer = combineReducers({
  items: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const rootReducer = combineReducers({
  contacts: Reducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
