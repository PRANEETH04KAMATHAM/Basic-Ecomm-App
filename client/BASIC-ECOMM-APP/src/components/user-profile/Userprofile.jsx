/*

import React from 'react'

import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { BsCart4 } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";




function Userprofile() {
  let { currentUser } = useContext(userLoginContext);
  //this is destructuring currentUser in the UserLoginStore using an object
  //console.log(currentUser);

  let navigate = useNavigate();
  function onEditUser(){
    navigate('../edit-user')
  }
  
  return (
    <div className='text-white'>
      <div>
        <h1 className='text-center text-white' >User-profile</h1>
      </div>

      <div className='text-end'>
        <img src={currentUser.profileImage} width="75px" alt="" className='rounded-circle' />
        <p className='fs-7'> {currentUser.username}  <MdModeEditOutline className='text-warning' onClick={onEditUser}/> </p>

        

        {/* Links to products and cart 
        <ul className='nav fs-5 p-3 justify-content-around'>
                <li className="nav-item">
                    <Link to="products" className='nav-link text-white'>
                    <AiOutlineProduct className='text-warning me-1'/>Products
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="cart" className='nav-link text-white'>
                    <BsCart4 className='text-warning me-1'/>Cart
                    </Link>
                </li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Userprofile;
*/





// SESSION -19

import React from 'react'

import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";




function Userprofile() {
  let { currentUser } = useContext(userLoginContext);
  //this is destructuring currentUser in the UserLoginStore using an object
  //console.log(currentUser);

  let navigate = useNavigate();
  function onEditUser(){
    navigate('../edit-user')
  }
  
  return (
    <div className='text-white'>
      <div>
        <h1 className='text-center text-white' >User-profile</h1>
      </div>

      <div className='text-end'>
        <img src={currentUser.profileImage} width="75px" alt="" className='rounded-circle' />
        <p className='fs-7'> {currentUser.username}  <MdModeEditOutline className='text-warning' onClick={onEditUser}/> </p>

        

        {/* Links to products and cart */}
        <ul className='nav fs-5 p-3 justify-content-around'>
                <li className="nav-item">
                    <Link to="products" className='nav-link text-white'>
                    <AiOutlineProduct className='text-warning me-1'/>Products
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="cart" className='nav-link text-white'>
                    <BsCart4 className='text-warning me-1'/>Cart
                    </Link>
                </li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Userprofile;