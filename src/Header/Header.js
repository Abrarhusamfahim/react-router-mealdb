import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavLink to="/home"
                    className="nav-link"
                    activeStyle= 
                    {{textDecoration:'none'}}
                    >Home</NavLink>

                    <NavLink
                    className="nav-link"
                    to="/resturant"
                    activeStyle={{textDecoration:'none'}}
                    >Resturant</NavLink>

                    <NavLink 
                    className="nav-link"
                    to="/about"
                    activeStyle={{textDecoration:'none'}}
                    >About</NavLink>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </nav>
    );
};

export default Header;