import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {show: false, message: "", severity: ""},

  reducers: {
    //action name
    showMessage: (state, action) => {
        const { text, severity } = action.payload;
        console.log("method called")
        console.log("text = ", text)
        console.log("severity = ", severity)
        return { show: true, message: text, severity: severity}
    },

    hideMessage: (state, action) => {
        return { show: false, message: "", severity: ""}
    }
  },
});

export const { showMessage, hideMessage } = alertSlice.actions;

export default alertSlice.reducer;