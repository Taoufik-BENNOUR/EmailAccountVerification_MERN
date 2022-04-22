import axios from "axios"
import { GET_USER_BY_ID, GET_USER_BY_ID_FAILED, GET_USER_BY_ID_SUCCESS } from "../actionTypes/userTypes"


export const getUserById = () => async (dispatch) =>{

dispatch({type:GET_USER_BY_ID})
const config = {
    header:{
        authorisation : localStorage.getItem("token")
    }
}

const response = await axios.get('/oneuser',config)
    try {
        dispatch({type:GET_USER_BY_ID_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:GET_USER_BY_ID_FAILED,payload:error.respnse.data})
    }
}