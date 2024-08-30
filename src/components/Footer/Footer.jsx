import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-social">
                    <Link to="https://www.instagram.com" className='social-icon'>Instagram</Link>
                  <Link to ="https://www.linkedIn.com" className='social-icon'>LinkedIn</Link>
                </div>
                <div className="footer-copyright">
                 <h4>copyright 2024 Dojima_Networks. All rights reserved @Aayush Verma</h4>   
             <Link to="https://www.gmail.com" className='social-icon'><h4>aayushvermaa087@gmail.com</h4></Link>       
                </div>
            </div>
        </footer>
    );
}

export default Footer;
