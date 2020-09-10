import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl,Button, Container,InputGroup,ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from './images/logo.jpg'
const NavBar = () =>{

    const changeOn = (e) =>{
        console.log(e.target.id)
        return(<div>Hello</div>)
      }
    
    const changeLeave = (e) =>{
        
    }
      

    return(
        <Container Fluid>
            <Navbar bg="light" variant="dark" expand="lg" fixed="top" className="px-5">
                <Navbar.Brand ><NavLink exact to="/"><img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></NavLink></Navbar.Brand>
                <Nav className="mr-auto font-weight-bold">
                <Nav.Link> 
                    <NavLink className="link px-2" exact to="/">
                        MEN
                    </NavLink>
                </Nav.Link>
                <Nav.Link > 
                    <NavLink className="link px-2" onMouseOver={e=>changeOn(e)} onMouseLeave={changeLeave} id="login" exact to="/Login">
                        WOMEN
                    </NavLink>
                </Nav.Link>
                <Nav.Link> 
                    <NavLink className="link px-2" onMouseOver={e=>changeOn(e)} onMouseLeave={changeLeave} id="categories" exact to="/Cart">
                        KIDS
                    </NavLink>
                </Nav.Link>
                <Nav.Link> 
                    <NavLink className="link px-2" onMouseOver={e=>changeOn(e)} onMouseLeave={changeLeave} id="categories" exact to="/Categories">
                       HOME & LIVINGS
                    </NavLink>
                </Nav.Link>
                <Nav.Link> 
                    <NavLink className="link px-2" onMouseOver={e=>changeOn(e)} onMouseLeave={changeLeave} id="categories" exact to="/Categories">
                    OFFERS
                    </NavLink>
                </Nav.Link>
                </Nav>
                <Form inline>
                <InputGroup className="">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Search for products/brands"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                    
                </Form>
                <Form className="form-inline ml-5">
                    <Button className="btn btn-light btn-sm" type="button"><FontAwesomeIcon icon={faUser} /><br/>Profile</Button>
                    <Button className="btn btn-light btn-sm" type="button"><FontAwesomeIcon icon={faBookmark} /><br/>Wishlist</Button>
                    <Button className="btn btn-light btn-sm" type="button"><FontAwesomeIcon icon={faShoppingBag} /><br/>Bag</Button>
                </Form>
            </Navbar>
            {/* <Container className="nav-top drop-menu">
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
                <h5>Hello</h5>
            </Container> */}
        </Container>
    
    )
}

export default NavBar;