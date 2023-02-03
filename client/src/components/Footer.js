import React from 'react';
import{BsFillTelephoneInboundFill} from "react-icons/bs";
import{MdEmail, MdLocationCity} from "react-icons/md";

const Footer = () => {
  return (
    <div>
    <h2>Contact Us</h2>  
    <BsFillTelephoneInboundFill/>
    <MdEmail/>
    <MdLocationCity/>
    </div>
  )
};

export default Footer;
