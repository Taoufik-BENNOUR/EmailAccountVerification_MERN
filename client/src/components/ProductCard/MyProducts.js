import React from 'react'
import { useSelector } from 'react-redux'

const MyProducts = () => {

    const products = useSelector(state=>state.products.products)
  return (
    <div>MyProducts</div>
  )
}

export default MyProducts