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
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" text="primary">
                <Container>
              <Navbar.Brand className='nav' as={Link} to="/">
                    <h2 className='heading text-white'> WAREHOUSE</h2>
                 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-primary">
                            <Nav.Link href="home#InventoryItems ">InventoryItems</Nav.Link>
                            
                            <Nav.Link as={Link} to="Blogs">
                                Blogs
                            </Nav.Link>
                            
                            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                            
                            
                            
                        </Nav>
                        <Nav>
                            
                            <Nav.Link as={Link} to="Register">
                                Register
                            </Nav.Link>
                           
                            {
                                user && <>
                                <Nav.Link as={Link} to="manageItems">ManageItems</Nav.Link>
                                <Nav.Link as={Link} to="addItems">Add Items</Nav.Link>
                                <Nav.Link as={Link} to="myItems">MyItems</Nav.Link>
                                
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