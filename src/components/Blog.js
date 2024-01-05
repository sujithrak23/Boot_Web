import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Blog() {
  return (
    
    <Navbar expand="lg" className="nav-full" style={{backgroundColor: 'black',height:'100px'}}>
    <Container fluid>
       <img style={{height:'80px',width:'80px'}}
         className='logo' 
         src='.\food-img1.jpg'
       />
      <Navbar.Brand href="#" style={{color: 'white',marginLeft: '5px',fontSize:'55px'}}>
        YumsteR
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navbar-center ms-auto "
          style={{ maxHeight: '100px',alignItems:'right'}}
          navbarScroll
        >
          <Nav.Link  href="#action1" style={{color: 'white',fontSize:'30px'}}>Home</Nav.Link>
          <Nav.Link  href="#action2" style={{color: 'white',fontSize:'30px'}}>About</Nav.Link>
          <Nav.Link  href="#action3" style={{color: 'white',fontSize:'30px'}}>Menu</Nav.Link>
          <Nav.Link  href="#action4" style={{color: 'white',fontSize:'30px'}}>Review</Nav.Link>          
          <Nav.Link  href="#action5" style={{color: 'white',fontSize:'30px',marginRight:'300px'}}>Logout</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
                  
         
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}
