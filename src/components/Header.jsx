import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar expand="lg" className="bg-primary fixed-top">
            <div className="container-fluid px-4">
                <Navbar.Brand>
                    <Link to="/" className='text-decoration-none text-light me-1 fs-3'><FontAwesomeIcon icon={faTruckFast} /> Daily Cart</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/wishlist" className='text-decoration-none text-light me-4'><FontAwesomeIcon icon={faHeart} className='me-1'/>Wishlist <Badge bg="secondary">20</Badge></Link>
                        <Link to="/cart" className='text-decoration-none text-light'><FontAwesomeIcon icon={faCartPlus} className='me-1'/>Cart <Badge bg="secondary">15</Badge></Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header