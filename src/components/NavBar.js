import { React, useState } from 'react';
import { RiHomeLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'; 
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import { Link } from 'react-router-dom';
import NewJobForm from './NewJobForm'; 

function NavBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container fluid>
        <Navbar bg="light" variant="light">
            <LinkContainer to='/home'>
                <Navbar.Brand><RiHomeLine/></Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
                <LinkContainer to='/wishlist'>
                    <Nav.Link>Wishlist</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/applied'>
                    <Nav.Link href="applied">Applied</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/replied'>
                    <Nav.Link href="replied">Replied</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={handleShow}>New Job</Nav.Link>
            </Nav>
            <Navbar.Brand href='https://github.com/khartson'><RiGithubFill/></Navbar.Brand>
            <Navbar.Brand href='https://www.linkedin.com/in/kyle-hartson/'><RiLinkedinBoxFill/></Navbar.Brand>
        </Navbar>
        <NewJobForm show={show} handleClose={handleClose}/>
        </Container>
        
    )
}

export default NavBar;