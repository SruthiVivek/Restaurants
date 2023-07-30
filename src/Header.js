import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home">
            <div className='d-flex'>
          <i class="fa-solid fa-utensils fa-2x text-white"></i>
            <p className='text-white ms-3 mt-3 fa-1x'>Friends Restaurant</p>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header