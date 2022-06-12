import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <div >
       <footer className='footer text-center  bg-primary h-25 '>
            <h6 className='text-center '>Price is in US dollars and excludes tax</h6>
            <h4 className='text-primary'>Follow us</h4>
            <p className='text-white'><small>copyright @ {year} Pty Ltd. Trademarks and brands are the property of their respective owners. </small></p>
        </footer>
       </div> 
    );
};
export default Footer;