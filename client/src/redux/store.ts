import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthUser';
import alertReducer from './reducers/Alert';

/*******

const reducers = combineReducers({
    auth: authReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
}); */

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
});

