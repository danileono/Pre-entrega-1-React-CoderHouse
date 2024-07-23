import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import CartWidget from '../CartWidget/CartWidget.jsx';

const NavigationBar = () => {
    return (
    
    <>
     <h2 className='Text-dark'>Mi tienda</h2>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto fw-bold text-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <Nav.Link href="#tienda">Tienda</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        
        <CartWidget />
    </>
    );
}

export default NavigationBar