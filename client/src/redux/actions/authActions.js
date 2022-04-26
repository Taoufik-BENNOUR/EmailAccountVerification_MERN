import { CHANGE_PASSWORD, CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_SUCCESS, FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS, GET_AUTH_USER, GET_AUTH_USER_FAILED, GET_AUTH_USER_SUCCESS, GET_URL, GET_URL_FAILED, GET_URL_SUCCESS, LOG_OUT, RESET_PASSWORD, RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "../actionTypes/authTypes"
import axios from "axios"


export const signup =  (newUser) => async (dispatch)=> {
    dispatch({type:SIGN_UP})

    try {
        const response = await axios.post(`/user/register`,newUser)
        localStorage.setItem("token", response.data.token);

        dispatch({type:SIGN_UP_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:SIGN_UP_FAILED,payload:error.response.data})
    }
}

export const signin =  (userCred) => async (dispatch)=> {
    dispatch({type: SIGN_IN})

    try {
        const response = await axios.post(`/user/login`,userCred)
        
        localStorage.setItem("token",response.data.token)

        dispatch({type:SIGN_IN_SUCCESS,payload:response.token})

    } catch (error) {
        dispatch({type:SIGN_IN_FAILED,payload:error.response.data})
    }
}

export const getAuthUser = () => async (dispatch) =>{
    dispatch({type:GET_AUTH_USER})

    try {
        const config = {
            headers:{
              authorization : localStorage.getItem("token")
            }
          }
    
        const response = await axios.get('/user/currentUser',config)

        dispatch({type:GET_AUTH_USER_SUCCESS,payload:response.data})         
  
    } catch (error) {
        dispatch({type:GET_AUTH_USER_FAILED,payload:error.response.data})         

    }
}
export const getUrl =(id,token)=>async (dispatch)=>{
dispatch({type:GET_URL})
    try {
        const response = await axios.get(`/user/verify/${id}/${token}`)

        dispatch({type:GET_URL_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:GET_URL_FAILED,payload:error.response.data})
    }
}
export const resetPassword = (id,token) =>async(dispatch)=>{
    dispatch({type:RESET_PASSWORD})
    try {
       const response = await axios.get(`/user/passwordTokenVerification/${id}/${token}`) 
       dispatch({type:RESET_PASSWORD_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:RESET_PASSWORD_FAILED,payload:error.response.data})
        
    }
}

export const forgotPassword = (sendmail) =>async(dispatch)=>{
    dispatch({type:FORGOT_PASSWORD})
    try {
       const response = await axios.post(`/user/forgotpassword`,sendmail) 
       dispatch({type:FORGOT_PASSWORD_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:FORGOT_PASSWORD_FAILED,payload:error.response.data})
        
    }
}
export const changePassword = (id,token,newPass) =>async(dispatch)=>{
    dispatch({type:CHANGE_PASSWORD})
    try {
       const response = await axios.post(`/user/changepassword/${id}/${token}`,newPass) 
       dispatch({type:CHANGE_PASSWORD_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:CHANGE_PASSWORD_FAILED,payload:error.response.data})
        
    }
}


export const logout = ()=>async (dispatch) => {
  
    dispatch({type:LOG_OUT})
    localStorage.removeItem("token")
    
  }