import React from 'react';
import { Table } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Contact Information</h1>
            <h3 className='text-center mt-4'>Adress:</h3>
           <div className="d-flex mt-5">
           
         <div className='w-50 border border-light shadow-sm p-5 me-3'>
          <h4>Company Name: <small>WareHouse management</small></h4> 
          <p className='w-50 '>
               1234 Street 
               City NewYork, AB 12345
               United States</p>
         </div>
         <div className='w-50 border border-light shadow-sm p-5 ms-3 '>
               <h5>Phone:1290785378</h5>
               <h5>Email: sales@email.com</h5>
               <h5>Web: www.company.com</h5>
             </div>
         </div> 
               
    <div className='mt-5 py-5'>
        <h2 className='text-center mb-5'>BUSINESS HOURS</h2>
        
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sales Department</th>
      <th>Service Department</th>
      <th>Parts Department</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mon:	8:00am - 5:00pm</td>
      <td>Mon:	9:00am - 6:00pm</td>
      <td>Mon:	9:00am - 7:00pm</td>
     
    </tr>
    <tr>
      <td>Tue:	8:00am - 9:00pm</td>
      <td>Tue:	8:00am - 9:00pm</td>
      <td>Tue:	8:00am - 9:00pm</td>
     
    </tr>
    <tr>
      <td>Wed:	8:00am - 5:00pm</td>
      <td>Wed:	8:00am - 5:00pm</td>
      <td>Wed:	8:00am - 5:00pm</td>
     
    </tr>
    <tr>
      <td>Thu:	8:00am - 5:00pm</td>
      <td>Thu:	8:00am - 5:00pm</td>
      <td>Thu:	8:00am - 5:00pm</td>
      
     
    </tr>
    <tr>
      <td>Fri:	8:00am - 5:00pm</td>
      <td>Fri:	8:00am - 5:00pm</td>
      <td>Fri:	8:00am - 5:00pm</td>
      
     
    </tr>
    <tr>
      <td>Sat:	8:00am - 5:00pm</td>
      <td>Sat:	8:00am - 5:00pm</td>
      <td>Sat:	8:00am - 5:00pm</td>
      </tr>
    <tr>
      <td>Sun:	8:00am - 5:00pm</td>
      <td>Sun:	8:00am - 5:00pm</td>
      <td>Sun:	8:00am - 5:00pm</td>
      </tr>
</tbody>
</Table>
</div>
    
 </div>
    
    );
};

export default Contact;