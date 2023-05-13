import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
    <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand><i className='fas fa-shop'></i> Pokemart</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link><i className='fas fa-user'></i></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header