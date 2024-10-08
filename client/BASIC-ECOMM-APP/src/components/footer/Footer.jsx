import './Footer.css'

import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

function Footer(){
    return(
        <div className='d-flex flex-wrap justify-content-around text-white text-center p-5 footer mt-5'>
            <div>
                <p className='text-center display-2 text-warning'><FaRegAddressBook /></p>
                <p>PRANEETH</p>
                <p>VIJAYAWADA</p>
            </div>
            <div>
                <p className='text-center display-2 text-warning'><MdOutlineContactPhone /></p>
                <p>praneeth@gmail.com</p>
                <p>123456789</p>
            </div>
        </div>
    )
}

export default Footer;