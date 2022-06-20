import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <div>
       <footer className='footer text-center h-25' style={{backgroundColor:'#6b4a9b'}}>
 <div class="container mt-2">
  <div className="row">
    <div className ="col text-sm-start">
    <p>Products</p>
    <p><small>ERP</small></p>
    <p><small>Global Business Management</small></p>
    <p><small>CRM</small></p>
    <p><small>Human Capital Management</small></p>
    <p><small>Professional Services Automation</small></p>
    <p><small>Omnichannel Commerce</small></p>
    <p><small>Analytics & Reporting</small></p>
    </div>
    
    <div className="col text-sm-start">
   <p> Services</p>
    <p><small>Industry Expertise</small></p>
    <p><small>Professional Services</small></p>
    <p><small>Support Services</small></p>
    <p><small>Partner Services and Support</small></p>
    <p><small>Professional Services Automation</small></p>
    <p><small>Omnichannel Commerce</small></p>
    <p><small>Analytics & Reporting</small></p>
    </div>
   
    <div className="col text-sm-start">
    <p> Solution Provider Program</p>
    <p><small>Alliance Partner Program</small></p>
    <p><small>Business Process Outsourcing</small></p>
    <p><small>Accountants</small></p>
    <p><small>System Availability</small></p>
    <p><small>Professional Services Automation</small></p>
    <p><small>Company</small></p>
    <p><small>Analytics & Reporting</small></p>
    </div>
    
    <div className="col text-sm-start">
     <p> Contact Us</p>
    <p><small>Events</small></p>
    <p><small>Business Process Outsourcing</small></p>
    <p><small>Accountants</small></p>
    <p><small>Product Demo</small></p>
    <p><small>Newsroom</small></p>
    <p><small>Company</small></p>
    <p><small>Social Impact</small></p>
    </div>
  </div>
  



 <div class="d-flex mt-3 pt-5 flex-direction: coloum justify-content-around align-items-center">
  <div className=''>
<h3>United States</h3>
<p>2300 Oracle Way
Austin, Texas 78741
</p>
 </div>
   
<div class="d-flex flex-direction: coloum justify-content-around align-items-center border-left">
 <p className='text-white'><small>copyright @ {year} Pty Ltd. </small></p>
 <div>
    <div class="verticalLine"></div>
 </div>
 <p><small>Site Map</small> </p>
 <div>
    <div class="verticalLine"></div>
 </div>
<p><small>Cookie Preferences</small></p>
<div>
    <div class="verticalLine"></div>
 </div>
<p><small>Terms of Use and Privacy</small> </p>
<div>
    <div class="verticalLine"></div>
 </div>
<p><small>Follow us</small> </p>
</div>

</div>

</div>
</footer>
</div>
 );
};
export default Footer;