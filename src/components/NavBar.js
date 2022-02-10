import React from 'react';
import { RiHomeLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'; 
import { Navbar, Nav, Container } from 'react-bootstrap'; 
function NavBar() {
    return(
        <Container fluid>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="home"><RiHomeLine/></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="wishlist">Wishlist</Nav.Link>
                <Nav.Link href="applied">Applied</Nav.Link>
                <Nav.Link href="replied">Replied</Nav.Link>
            </Nav>
            <Navbar.Brand href='https://github.com/khartson'><RiGithubFill/></Navbar.Brand>
            <Navbar.Brand href='https://www.linkedin.com/in/kyle-hartson/'><RiLinkedinBoxFill/></Navbar.Brand>
        </Navbar>  
        </Container>
    )
}

export default NavBar;