import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getUrl } from '../../redux/actions/authActions'
import './Emailverify.css'
const EmailVerify = () => {
  const error = useSelector((state) => state.authReducer.errors.errors);
  const er = useSelector((state) => state.authReducer.er);
  const msg = useSelector((state) => state.authReducer.msg);

 const dispatch = useDispatch()
 const {id,token} = useParams()
  useEffect(() => {
    dispatch(getUrl(id,token))

  }, [])
  
  return  (
    <div className='all'>
 {er === false?   <Card className='card-container' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://saoanh.com/themes/saoanh/images/success-icon-10.png" />
  <Card.Body>
    <Card.Title>Email verified</Card.Title>
 
    <Link to="/signin">
     <Button variant='outline-success'>Login</Button>
   </Link>  </Card.Body>
</Card>: <h1>{error && error.map(er=>er.msg)}</h1>}

    </div>
  )
}

export default EmailVerify