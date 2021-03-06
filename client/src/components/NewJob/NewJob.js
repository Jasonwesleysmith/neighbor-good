import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Container, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_JOB } from '../../utils/mutations';
import Auth from '../../utils/auth';

const NewJob = () => {
  const navigate = useNavigate();
  // const [addJob] = useMutation(ADD_JOB);

  const [jobData, setJobData] = useState({
    job: '',
    pay: '',
    date: '',
    time: '',
    name: '',
    phoneNumber: '',
    location: '',
    description: '',
  });
  console.log(jobData);

  const [addJob] = useMutation(ADD_JOB);

  const submitJob = (e) => {
    e.preventDefault();
    addJob({
      variables: {
        job: jobData.job,
        pay: jobData.pay,
        date: jobData.date,
        time: jobData.time,
        name: jobData.name,
        phoneNumber: jobData.phoneNumber,
        location: jobData.location,
        description: jobData.description,
        additionalInfo: '',
        username: '',
      },
    });
    //submit data w api call
    //clear form if stay on same page
    //or navigate to my jobs or dashboard
    navigate('/');
  };

  return (
    <NewJobStyled>
      <Card style={{ width: '30rem' }} className="bg-white mt-4 mx-auto">
        <Form style={{ width: '25rem', margin: '1rem' }}>
          <h2 className="card-title text-center mb-4">Create Job</h2>

          {/* JOB */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="job">Job:</Form.Label>
            <Form.Control
              value={jobData.job}
              onChange={(e) => setJobData({ ...jobData, job: e.target.value })}
              type="text"
              id="job"
              placeholder="Enter Name of Job"
            ></Form.Control>
          </Form.Group>

          {/* PAY */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="pay">Pay:</Form.Label>
            <Form.Control
              value={jobData.pay}
              onChange={(e) => setJobData({ ...jobData, pay: e.target.value })}
              type="text"
              id="pay"
              placeholder="Enter Pay"
            ></Form.Control>
          </Form.Group>

          {/* DATE */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="date">Date:</Form.Label>
            <Form.Control
              value={jobData.date}
              onChange={(e) => setJobData({ ...jobData, date: e.target.value })}
              type="text"
              id="date"
              placeholder="Enter Date of Job"
            ></Form.Control>
          </Form.Group>

          {/* TIME */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="time">Time:</Form.Label>
            <Form.Control
              value={jobData.time}
              onChange={(e) => setJobData({ ...jobData, time: e.target.value })}
              type="text"
              id="time"
              placeholder="Enter Time of Job"
            ></Form.Control>
          </Form.Group>

          {/* TIME */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="name">Contact Name:</Form.Label>
            <Form.Control
              value={jobData.name}
              onChange={(e) => setJobData({ ...jobData, name: e.target.value })}
              type="text"
              id="name"
              placeholder="Enter Name of Contact"
            ></Form.Control>
          </Form.Group>

          {/* phoneNumber */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="phone">Phone Number:</Form.Label>
            <Form.Control
              value={jobData.phoneNumber}
              onChange={(e) =>
                setJobData({ ...jobData, phoneNumber: e.target.value })
              }
              type="text"
              id="phone"
              placeholder="Enter Phone Number of Contact"
            ></Form.Control>
          </Form.Group>

          {/* LOCATION */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="location">Location:</Form.Label>
            <Form.Control
              value={jobData.location}
              onChange={(e) =>
                setJobData({ ...jobData, location: e.target.value })
              }
              type="text"
              id="location"
              placeholder="Enter Location of Job"
            ></Form.Control>
          </Form.Group>

          {/* DESCRIPTION */}
          <Form.Group className="mt-2">
            <Form.Label htmlFor="description">Description:</Form.Label>
            <Form.Control
              value={jobData.description}
              onChange={(e) =>
                setJobData({ ...jobData, description: e.target.value })
              }
              type="text"
              id="description"
              placeholder="Enter Description of Job"
            ></Form.Control>
          </Form.Group>

          {/* ADDITIONAL */}
          {/*           <Form.Group className="mt-2">
            <Form.Label htmlFor="additional">
              Additional Information:
            </Form.Label>
            <Form.Control
              value={jobData.additional}
              onChange={(e) => setJobData({ ...jobData, job: e.target.value })}
              type="text"
              id="additional"
              placeholder="Enter Additional Information"
            ></Form.Control>
          </Form.Group>
 */}
          {/*           <label type="text" htmlFor="additional">
            Additional info:
          </label>
          <input
            value={jobData.info}
            onChange={(e) => setJobData({ ...jobData, info: e.target.value })}
            id="additional"
            type="text"
          /> */}
          <button onClick={submitJob}>Create Job</button>
        </Form>
      </Card>
    </NewJobStyled>
  );
};

export default NewJob;

const NewJobStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: bold;

  /* input {
    margin-top: 3px;
    font-size: 2rem;
    margin-bottom: 3px;
    max-width: 350px;
    border-radius: 5px;
  } */

  button {
    border-radius: 3rem;
    border: none;
    font-size: 20px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem;
    color: #fff;
    background-color: #555;
  }
`;
