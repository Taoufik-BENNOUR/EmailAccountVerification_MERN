import { GET_AUTH_USER, GET_AUTH_USER_FAILED, GET_AUTH_USER_SUCCESS, LOG_OUT, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "../actionTypes/authTypes";

const initialState  = {
    loading:false,
    msg:"",
    erros:[],
    isAuth:false,
    user:[],
    errors:[]

}

const authReducer = (state = initialState,{type,payload}) => {
switch (type) {
    case SIGN_UP:
    case SIGN_IN:
    case GET_AUTH_USER:        
        return {...state,loading:true}

    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
        return {...state,loading:false,msg:payload,isAuth:true}

    case GET_AUTH_USER_SUCCESS:
        return {...state,loading:false,user:payload,isAuth:true}
     
    case SIGN_UP_FAILED:
    case SIGN_IN_FAILED:
    case GET_AUTH_USER_FAILED:    
        return {...state,loading:false,errors:payload,isAuth:false}

    case LOG_OUT:
        return{...state,isAuth:false,loading:false}
    default:
        return state;
}
}

export default authReducer;