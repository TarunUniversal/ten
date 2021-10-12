import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/tenlogo.png'

function Header() {
    return (
        <>
            <Navbar fixed="top" variant="dark" expand="lg" style={{backgroundColor:'#212121',zIndex:'100'}} >
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="40"
                // height="30"
                className="d-inline-block align-top"
                />&ensp;
            TEN
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#link">Courses</Nav.Link>
                    <Nav.Link href="#link">We're Hiring</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Certification</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Alumni Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Forum</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Hackathon</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Membership Registration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Campus Ambassador Program</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mentorship</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Social Media</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Testimonials</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Contact US</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Complaints</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="search..."
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="dark" style={{backgroundColor:'transparent', borderStyle:'none'}} ><FontAwesomeIcon icon={faSearch} /></Button>
                </Form>
                <Button variant="dark" style={{backgroundColor:'transparent', borderStyle:'none'}}><FontAwesomeIcon icon={faShoppingBag} /></Button>
                <Button variant="dark" style={{backgroundColor:'transparent', borderStyle:'none'}}>Login</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>   
        </>
    )
}

export default Header
