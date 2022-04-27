import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Header.css';


const Header = () => {

    const isLogged =false


  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav >
                    {
                        isLogged ? 
                                <Nav.Link><Link  to='/'>Salir</Link></Nav.Link>
                                :
                                <Nav.Link><Link to='/login'>Iniciar Sesion</Link></Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header