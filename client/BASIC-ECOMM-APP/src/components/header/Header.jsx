import './Header.css'
import { Link } from 'react-router-dom';

import { AiFillShop } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { GiArchiveRegister } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";


function Header(){

    let { logoutUser, userLoginStatus } = useContext(userLoginContext);

    return(
        <div className='d-flex flex-wrap justify-content-around header'>
            <h1 className='p-2'>
            <AiFillShop />Myshop
            </h1>
            <ul className='nav fs-5 p-3'>
                <li className="nav-item">
                    <Link to="" className='nav-link text-white'>
                    <IoMdHome className='text-warning me-1'/>Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="register" className='nav-link text-white'>
                    <GiArchiveRegister className='text-warning me-1'/>Register
                    </Link>
                </li>

                {userLoginStatus === false ? (
                <li className="nav-item">
                    <Link to="login" className='nav-link text-white'>
                    <BiLogIn className='text-warning me-1'/>Login
                    </Link>
                </li>
                ) 
                :
                (
                    <li className="nav-item">
                      <Link to="login" className="nav-link text-white" onClick={logoutUser}>
                        <BiLogOut className="text-warning me-1 " />
                        Logout
                      </Link>
                    </li>
                )}

                <li className="nav-item">
                    <Link to="about" className='nav-link text-white'>
                    <ImInfo className='text-warning me-1'/>Aboutus
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;