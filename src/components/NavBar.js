import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl,Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const NavBar = () =>{
    return(
        <Container Fluid>
            <Navbar bg="light" variant="light" expand="lg" fixed="top">
                <Navbar.Brand ><NavLink exact to="/">Navbar</NavLink></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link> 
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </Nav.Link>
                <Nav.Link> 
                    <NavLink exact to="/Login">
                        Login
                    </NavLink>
                </Nav.Link>
                <Nav.Link> 
                    <NavLink exact to="/Categories">
                        Categories
                    </NavLink>
                </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </Container>
    
    )
}

export default NavBar;