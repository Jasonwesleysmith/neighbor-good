// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Container, Card } from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { useNavigate, Link } from 'react-router-dom';
// import styled from 'styled-components';

import Auth from '../../utils/auth';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login] = useMutation(LOGIN);
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await login({
        variables: {
          email: userFormData.email,
          password: userFormData.password,
        },
      });

      Auth.login(response.data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Container>
        <Card
          style={{ width: '30rem' }}
          className="shadow-lg bg-white mt-5 mx-auto"
        >
          <Form
            style={{ width: '25rem', margin: '2rem', padding: 'pt-2rem' }}
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your login credentials!
            </Alert>
            <h2 className="card-title text-center mb-4 ">Log In</h2>
            <Form.Group className="mt-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
            </Form.Group>
            <h6 className="mt-2">
              <Link to="/signup">Sign up</Link> instead
            </h6>
            <Button
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
              variant="success"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default LoginForm;
