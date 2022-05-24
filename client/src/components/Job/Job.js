import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

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
  const [me] = useMutation(QUERY_JOB);

  const claimJob = (id) => {
    console.log(id);
    claimJob(id, log)
    //use this id to make api call to claim job
    // mutation, hit create endpoint
    // use hook from utils file to post to database
  };
  return (
    <JobStyled>
      <div className="goodJob">
        <span className="title">Good Job: </span>
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
  background-color: #3bb57533;
  margin: 1rem;
  border-radius: 1rem;
  max-width: 200px;
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
    border-radius: 1rem;
    font-size: 12px;
  }
`;

export default Job;
