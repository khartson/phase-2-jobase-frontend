import { React, useState } from 'react';
import { RiHomeLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'; 
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import NewJobForm from './NewJobForm'; 

// NavBar - child of App.js - bar that navigates the routes for each tab of
//          of the application, as well as rendering the NewJobForm modal,
//          + my networking icons :) 
// onAdd - App.js - will handle state update for list of jobs when user
//         submits a new job application via 'New Job' modal
function NavBar({ onAdd }) {

    // show, setShow - state variables that will toggle display of the
    // NewJobForm modal, wherein users can add a new job application
    const [show, setShow] = useState(false);

    // handleClose, handleShow - togglevalue of 'show' state to display or hide
    // job application form 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // NavBar handles react-router redirects, which will then be rendered via
    // URL in App.js
    return(
        <Container fluid>
        <Navbar bg="light" variant="light">
            <LinkContainer to='/'>
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
        <NewJobForm show={show} handleClose={handleClose} handleAdd={onAdd}/>
        </Container>
        
    )
}

export default NavBar;