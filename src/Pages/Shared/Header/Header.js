import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';

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
                    <h2 className='heading text-white'> WAREHOUSE</h2>
                 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav"  >
                        <Nav className="mx-auto  text-white " >
                            <Nav.Link href="home#InventoryItems " style={{color:'white'}}>InventoryItems</Nav.Link>
                            
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
                            {
                                user ?
                                
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    
                                   
                                :
                                <Nav.Link as={Link} to="login">
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