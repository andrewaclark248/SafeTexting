import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null},

  reducers: {
    //action name
    loginUser: (state, action) => {
      const login = {
        user: null,
        token: action.payload?.accessToken,
        email: action.payload?.email
        };
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state = action.payload;
      //return login;

    }
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;