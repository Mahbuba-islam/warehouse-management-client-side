import React from 'react';
import { Table } from 'react-bootstrap';

const Contact = () => {
    return (

      
        <div className='container p-0 border-0 '>
            <h1 className=' text-center mt-5' style={{color:'#4a509b'}}>Contact Information</h1>
            <h3 className='text-center mt-4 text-success'>Adress:</h3>
           <div className="   mt-5">

           <div className='card w-50 text-start mx-auto shadow-lg'>
           <div className='w-100 border  shadow-lg p-5 me-3  card-body b' >
          <h4 > <span className='card-title' style={{color:'#4a509b'}}>Company Name: </span> <small>N&S electric WareHouse</small></h4> 
          <p className='w-50 card-text'>
               1234 Street 
               City NewYork, AB 12345
               United States</p>
        
        
               <h5><span style={{color:'#4a509b'}}>Phone: </span>  1290785378</h5>
               <h5><span style={{color:'#4a509b'}}>Email: </span>  sales@email.com</h5>
               <h5><span style={{color:'#4a509b'}}>Web:   </span>  www.company.com</h5>
               </div>
           </div>
        
         <div>
   
 </div>
        <div className=''>
       
        </div>
         
         </div> 
               
    <div className='mt-5 py-5'>
        <h2 className='text-center mb-5' style={{color:'#4a509b'}}>BUSINESS HOURS</h2>
        
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