import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthUser';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});

