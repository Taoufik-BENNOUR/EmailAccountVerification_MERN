import axios from "axios"
import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../actionTypes/productsTypes"


export const getAllProducts = () => async (dispatch)=> {

    dispatch({type:GET_PRODUCTS})

    try {

        const config = {
            Headers : {
                 authorization :localStorage.getItem("token")}}

        const response = await axios.get('/products',config)
           
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAILED,payload:error.response.data})

    }
}