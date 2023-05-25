import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { logout } from '../actions/userActions';


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

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

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>

              </NavDropdown>
            ) : (
                    <LinkContainer to='/login'>
                      <Nav.Link><i className='fas fa-user'></i></Nav.Link>
                    </LinkContainer>
                )}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header