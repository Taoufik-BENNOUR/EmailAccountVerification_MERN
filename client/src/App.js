import logo from './logo.svg';
import './App.css';
import GuestNav from './components/NavBar/GuestNav';
import {Route, Routes} from "react-router-dom"
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './redux/actions/authActions';
import ProductList from './components/ProductCard/ProductList';
import MyProducts from './components/ProductCard/MyProducts';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
import UserNav from './components/NavBar/UserNav';

function App() {
  const isAuth = useSelector(state=>state.authReducer.isAuth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [isAuth,dispatch])
  
  return (
    <>
      
{isAuth?  <UserNav /> : <GuestNav />}  
<Routes>
    <Route path="/signin" element={<Signin/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/productslist' element={ <PrivateRoute><ProductList /> </PrivateRoute> } />
        <Route path='/profile' element={ <PrivateRoute><Profile /> </PrivateRoute> } />
  </Routes>
    </>
  );
}

export default App;
