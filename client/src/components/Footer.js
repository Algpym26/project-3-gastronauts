import React from 'react';
import{BsFillTelephoneInboundFill} from "react-icons/bs";
import{MdEmail, MdLocationCity} from "react-icons/md";
import './styles/footer.css';

const Footer = () => {
  return (
    <div className = "footer">
    <h2>Contact Us</h2>  
    <BsFillTelephoneInboundFill/>
    <MdEmail/>
    <MdLocationCity/>
    </div>
  )
};

export default Footer;
