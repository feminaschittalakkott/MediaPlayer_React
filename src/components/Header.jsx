import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-video fa-bounce" style={{color: "#9933CC"}}></i>
            {' '}
            <b>Media Player</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header