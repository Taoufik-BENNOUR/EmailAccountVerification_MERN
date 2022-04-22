import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actions/userActions";
import ProductCard from "../ProductCard/ProductCard";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById());
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const products = useSelector((state) => state.userReducer.products);

  return loading ? (
    <h1>wait</h1>
  ) : (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Profile;
