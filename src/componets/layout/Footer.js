import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer"> 
      
          <p className="text-center mt-3">
              <Link to="/contact" >Contact</Link>|
              <Link to="/about" >About</Link>|
              <Link to="/policy" >Policy</Link>
          </p>
          
    </div>
  );
};

export default Footer;
