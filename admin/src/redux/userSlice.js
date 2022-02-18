
import { createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:null,
    isFetching:false,
    error:false
  },
  reducers: {
   loginStart:(state)=>{
       state.isFetching=true
   },
   loginSucces:(state,action)=>{
       state.isFetching=false;
       state.currentUser=action.payload
   },
   loginFaliure:(state)=>{
       state.isFetching=false;
       state.error=true
   },
   logout:(state)=>{
     state.isFetching=false;
     state.currentUser=null
   }
  },
});

export const { loginStart,loginSucces,loginFaliure,logout} = userSlice.actions;
export default userSlice.reducer;
