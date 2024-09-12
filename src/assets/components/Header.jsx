import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar data-bs-theme="dark" bg='transparent' style={{height:'60px'}} >
        <Container className='mt-4' >
          <Navbar.Brand href="/"><img src="https://clipart-library.com/new_gallery/40-400344_deadpool-vector-superhero-logos-png.png" alt="no image" style={{width:'60px',height:'60px'}} /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href='/' className='me-5'>Home</Nav.Link>
            <Nav.Link href='/about' className='me-5'>About Us</Nav.Link>
            <Nav.Link href='/grivancepage' className='me-5  rounded' style={{backgroundColor:'orange'}}>Contact With Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header