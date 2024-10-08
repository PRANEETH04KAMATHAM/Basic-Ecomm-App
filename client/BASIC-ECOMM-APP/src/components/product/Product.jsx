
/*
import React from 'react'
import './Product.css'
import {useContext} from 'react';
import {userLoginContext} from '../../contexts/userLoginContext'; 

function Product(props) {
  let productObj = props.i;
  let {currentUser} =  useContext(userLoginContext)
   
  //make http post request
  async function addProductToCart(productObjCart){
      
    //add user data to productObj
    productObjCart.username = currentUser.username;
    
    let response = await fetch('http://localhost:3000/user-cart',
      {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(productObjCart),
      }
    );

      console.log(res)
      if(response.status===201){
        console.log("product added to cart")
      }
    
    
  }

  return (
    <div className='card text-center h-100'>
      {/* <h1 className='text-center text-white' >Product</h1> 
      
        <div className="card-body d-flex flex-column justify-content-between bg-light">
          <p className='fs-5 text-secondary'> {productObj.title} </p>
          <p className="text-warning fs-5"> {productObj.brand} </p>
          <p className="lead">{productObj.description} </p>
          <p className="fs-3 text-info"> ${productObj.price} </p>
          <button className="btn btn-success" onClick={()=>addProductToCart(productObj)} >ADD TO CART</button>
        </div>
    
    </div>
  )
}

export default Product;

*/






//  SESSION-19

import React from 'react'
import './Product.css'
import {useContext} from 'react';
import {userLoginContext} from '../../contexts/userLoginContext'; 
import { useNavigate } from 'react-router-dom';

function Product(props) {
  let productObj = props.i;
  let {currentUser} =  useContext(userLoginContext)
  let navigate = useNavigate();

  //make http post request
  async function addProductToCart(productObj){
      console.log(productObj)
    //add user data to productObj
    let username = currentUser.username;
    
    let res = await fetch(`http://localhost:4000/user-cart/add-to-cart/${username}`,
      {
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(productObj),
      }
    );

    let result = await res.json()
      console.log(result)

      //navigate to cart component
      if(result.payload.modifiedCount===1)
      {
        navigate('/user-profile/cart')
      }
    
  }

  return (
    <div className='card text-center h-100'>
      {/* <h1 className='text-center text-white' >Product</h1> */}
      
        <div className="card-body d-flex flex-column justify-content-between bg-light">
          <p>
          <img src={productObj.thumbnail} alt="can't display image" />
          </p>
          <p className='fs-5 text-secondary'> {productObj.title} </p>
          <p className="text-warning fs-5"> {productObj.brand} </p>
          <p className="lead">{productObj.description} </p>
          <p className="fs-3 text-info"> ${productObj.price} </p>
          <button className="btn btn-success" onClick={()=>addProductToCart(productObj)} >ADD TO CART</button>
        </div>
    
    </div>
  )
}
export default Product;