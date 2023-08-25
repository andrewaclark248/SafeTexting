import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null},

  reducers: {
    //action name
    loginUser: (state, action) => {
      
      //return login;

    }
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;