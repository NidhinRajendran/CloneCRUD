import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
    

<Navbar expand="lg" className="bg-black">
      <Container>
        <div className='d-flex'>
          <Navbar.Brand ><img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="no image" width={'10%'}/></Navbar.Brand>
          <Navbar.Toggle style={{color:'white'}} aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-light'>Account</Nav.Link>
            <Nav.Link href="#action2" className='text-light'>Trending</Nav.Link>
            
          </Nav>
          <input type="text" placeholder='Search' className='form-control me-2 text-dark' style={{width:'150px'}} />
            <button className='btn btn-primary mt-2 mt-md-0'>Search</button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header