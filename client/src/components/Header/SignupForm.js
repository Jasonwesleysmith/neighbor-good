import React, { useState } from 'react';
import { Form, Container, Button, Alert, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const SignupForm = () => {
  const [addUser] = useMutation(ADD_USER);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
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
      const response = await addUser({
        variables: {
          email: userFormData.email,
          username: userFormData.username,
          password: userFormData.password,
        },
      });

      Auth.login(response.data.addUser.token);
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
      {/* This is needed for the validation functionality above */}

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
            {/* show alert if server response is bad */}
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your signup!
            </Alert>
            <h2 className="card-title text-center mb-4">Sign Up</h2>
            <Form.Group>
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
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
              <Link to="/login">Log in</Link> instead
            </h6>
            <Button
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              className="font-weight-bold"
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

export default SignupForm;
