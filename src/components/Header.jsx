import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

  const nav = useNavigate()

  const logginOut=()=>{
    nav('/')
    sessionStorage.removeItem("userData")
  }

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
        {
          sessionStorage.getItem("userData") &&
            <button className='btn btn-info' onClick={logginOut}>Logout</button>
        }
      </Navbar>
    </>
  )
}

export default Header