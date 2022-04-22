import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;


// import { configureStore } from '@reduxjs/toolkit'

// import authReducer from "../reducers/authReducer"
// import productsReducer from "../reducers/productsReducer"
// import userReducer from "../reducers/userReducer"



// const store = configureStore({
//   reducer: {
//     authReducer: authReducer,
//     productsReducer: productsReducer,
//     userReducer:userReducer
//   }
// })

// export default store
