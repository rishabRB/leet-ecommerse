import { loginFaliure, loginStart, loginSucces } from "./userRedux"
import {publicRequest} from "../requestMethod"



export const LoginUser = async(dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await publicRequest.post("/auth/login",user)
        dispatch(loginSucces(res.data))

    }catch(err){
        dispatch(loginFaliure())
    }
}
