import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png'
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () => {
        signOut(auth);
    }

    return (

        <>
            <Navbar collapseOnSelect className='header-container' expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img className='brand-logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>
                        </Nav>

                        <Nav>
                            {/* <Nav.Link as={Link} to='/about'>About</Nav.Link> */}
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manageitem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="/addinventory">Add New Items</Nav.Link>
                                    <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            }

                            {
                                user ? <Button variant='link' className='text-decoration-none text-white' onClick={handleSingOut}>Sign Out</Button> : <Nav.Link eventKey={2} as={Link} to="/login">
                                    login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;