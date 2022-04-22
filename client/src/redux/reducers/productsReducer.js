
import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from '../actionTypes/productsTypes'

const initialState={
    loading:false,
    products:[]
}

const productsReducer = (state=initialState,{type,payload}) => {
   switch (type) {

   case GET_PRODUCTS :
    
   return {...state,loading:true}
   
   case GET_PRODUCTS_SUCCESS:
    return {...state,loading:false,products:payload.products,msg:payload.msg}

   case GET_PRODUCTS_FAILED:
     return {...state,loading:false,...payload}  
    
    default:
return state
   }     
}

export default productsReducer