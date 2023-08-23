import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null},

  reducers: {
    //action name
    loginUser: (state, action) => {
      const login = {
        user: action.payload.user,
        token: action.payload.token,
        };
      localStorage.setItem("userInfo", JSON.stringify(login));

      console.log("login =", login)
      return login;

    }
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;