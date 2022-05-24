import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

import styled from 'styled-components';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  return (
    <>
      <HeaderStyled>
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand className="title" as={Link} to="/">
              neighbor:good
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Unclaimed Jobs
                  <br />
                </Nav.Link>
                {/* <br /> */}

                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/saved">
                      My Jobs
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login/Sign Up
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.section`
  text-align: right;
  .navbar {
    background: #563d7c;
  }
  .title {
    align-items: left;
    font-size: 2em;
    font-weight: bold;
  }
`;

export default AppNavbar;
