import React from 'react';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
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
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import pizzaReducer from 'redux/pizza';
import pointsReducer from 'redux/points';

export const ReduxStore = ({ children }) => {
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };

  const reducers = combineReducers({
    pizzaInfo: pizzaReducer,
    points: pointsReducer,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
