import { CHANGE_PASSWORD, CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_SUCCESS, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, GET_AUTH_USER, GET_AUTH_USER_FAILED, GET_AUTH_USER_SUCCESS, GET_URL, GET_URL_FAILED, GET_URL_SUCCESS, LOG_OUT, RESET_PASSWORD, RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "../actionTypes/authTypes";

const initialState  = {
    loading:false,
    msg:"",
    er:false,
    isAuth:false,
    user:[],
    errors:[]

}

const authReducer = (state = initialState,{type,payload}) => {
switch (type) {
    case SIGN_UP:
    case SIGN_IN:
    case GET_AUTH_USER:  
    case GET_URL:      
    case RESET_PASSWORD:
    case FORGOT_PASSWORD:  
    case CHANGE_PASSWORD:  
        return {...state,loading:true}

    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:

        return {...state,loading:false,msg:payload,isAuth:true}

    case GET_URL_SUCCESS:  
    case RESET_PASSWORD_SUCCESS:  
    case FORGOT_PASSWORD_SUCCESS:  
    case CHANGE_PASSWORD_SUCCESS:
        return {...state,loading:false,msg:payload.msg,isAuth:false}

    case GET_AUTH_USER_SUCCESS:
        return {...state,loading:false,user:payload,isAuth:true}
     
    case SIGN_UP_FAILED:
    case SIGN_IN_FAILED:
    case GET_AUTH_USER_FAILED:
        return {...state,loading:false,errors:payload,isAuth:false,}

    case GET_URL_FAILED:   
    case RESET_PASSWORD_FAILED:     
    case FORGOT_PASSWORD_SUCCESS:
    case CHANGE_PASSWORD_FAILED:    
        return {...state,loading:false,errors:payload,isAuth:false,er:true}
    case LOG_OUT:
        return{...state,isAuth:false,loading:false}
    default:
        return state;
}
}

export default authReducer;