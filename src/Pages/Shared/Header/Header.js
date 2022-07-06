import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';

// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () =>{
        signOut(auth);
    }
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top'  style={{backgroundColor:'#6b4a9b'}}>
                <Container>
              <Navbar.Brand className='nav' as={Link} to="/">
            
                    <h2 className='example text-warning fs-5 fst-italic fa-sm fa-10x fa-beat fa-1xs' > <span className=' text-warning text-bold fs-3'>N&S_</span> warehouse </h2>
                 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav"  >
                        <Nav className="mx-auto  text-white " >
                            <Nav.Link href="home#inventoryItems" style={{color:'white'}}>InventoryItems</Nav.Link>
                            
                            <Nav.Link as={Link} to="Blogs"  style={{color:'white'}}>
                                Blogs
                            </Nav.Link>
                            
                            <Nav.Link as={Link} to="contact" style={{color:'white'}}>Contact Us</Nav.Link>
                            
                            
                            
                        </Nav>
                        <Nav>
                            
                            <Nav.Link as={Link} to="Register" style={{color:'white'}}>
                                Register
                            </Nav.Link>
                           
                            {
                                user && <>
                                <Nav.Link as={Link} to="manageItems" style={{color:'white'}}>ManageItems</Nav.Link>
                                <Nav.Link as={Link} to="addItems" style={{color:'white'}}>Add Items</Nav.Link>
                                <Nav.Link as={Link} to="myItems" style={{color:'white'}}>MyItems</Nav.Link>
                                
                                </>
                            }
                        
                        
                       
                             {    user ?
                            

                    <Nav.Link as={Link} to="Profile" className='bg-white shadow-lg rounded-circle fw-bold mx-1 text-center ' style={{color:'#6b4a9b',  width: '38px', height: '39px'}}>
                      {user.displayName?.slice(0,1).toUpperCase()}
                    </Nav.Link>
                                
                          :
                                <div></div>}
                                     
                                    
                          {
                                user ?
                                
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    
                                   
                                :
                                <Nav.Link as={Link} to="login" style={{color:'white'}}>
                                Login
                            </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;