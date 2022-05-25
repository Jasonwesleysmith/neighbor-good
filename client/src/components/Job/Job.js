import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
// import {CLAIM_JOB} from '../../utils/queries'

const Job = (props) => {
  const {
    id,
    claimed,
    claimedBy,
    job,
    pay,
    date,
    time,
    name,
    phone,
    location,
    description,
    info,
  } = props;

  // const [claimJob] = useMutation(CLAIM_JOB);

  const claimJob = (id) => {
    console.log(id);
    claimJob(id);
    //use this id to make api call to claim job
    // mutation, hit create endpoint
    // use hook from utils file to post to database
  };
  return (
    <JobStyled>
      <div className="goodJob">
        <span className="title">Job: </span>
        {job}
      </div>
      <ul>
        <li>
          <span className="title">Pay: </span>
          {pay}
        </li>
        <li>
          <span className="title">Date: </span>
          {date}
        </li>
        <li>
          <span className="title">Time: </span>
          {time}
        </li>
        <li>
          <span className="title">Name: </span>
          {name}
        </li>
        <li>
          <span className="title">Phone number: </span>
          {phone}
        </li>
        <li>
          <span className="title">Location: </span>
          {location}
        </li>
        <li>
          <span className="title">Description of Job: </span>
          {description}
        </li>
        <li>
          <span className="title">Additional info: </span>
          {info}
        </li>
      </ul>
      <button onClick={() => claimJob(id)}>Claim Job</button>
    </JobStyled>
  );
};

const JobStyled = styled.section`
  padding: 3rem;
  background-color: #7dc967;
  margin: 1rem;
  border-radius: 1rem;
  max-width: 500px;
  min-height: 400px;
  box-shadow: 4px 2px 2px grey;
  .title {
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  .goodJob {
    font-size: 1.5rem;
    color: #0c6135;
  }

  button {
    border-radius: 3rem;
    border: none;
    font-size: 20px;
    font-weight: bold;
    padding: 1rem;
    color: #fff;
    background-color: #555;
  }
`;

export default Job;
