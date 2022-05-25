import React from 'react';
import Job from '../Job';
import { useQuery } from '@apollo/client';
import { UNCLAIMED_JOBS } from '../../utils/queries';
import styled from 'styled-components';

const jobs = [
  {
    id: 0,
    claimed: false,
    claimedBy: null,
    job: 'Handyman',
    pay: '500',
    name: 'Ben',
    phone: '5555555',
    location: 'My Basement',
    description: 'Drywall a closet and move outlet',
    info: 'turn off breaker before work',
  },
  {
    id: 1,
    claimed: false,
    claimedBy: null,
    job: 'Lawn Mowed',
    pay: '20',
    name: 'Alice',
    phone: '5554444',
    location: 'Main St',
    description: 'Mow lawn',
    info: 'non rainy days',
  },
  {
    id: 2,
    claimed: false,
    claimedBy: null,
    job: 'Coffee Table moved',
    pay: '5',
    name: 'Joe',
    phone: '5553333',
    location: 'Joes house',
    description: 'move my coffee table',
    info: 'move downstairs',
  },
];

const UnclaimedJobs = () => {
  // const [unclaimedJobs] = useQuery(UNCLAIMED_JOBS);
  return (
    <UnclaimedJobsStyled>
      <h2>Unclaimed Jobs</h2>
      <div className="grid">
        {jobs.map(
          (job) =>
            !job.claimed && (
              <div key={job.id}>
                <Job
                  id={job.id}
                  claimed={job.claimed}
                  claimedBy={job.claimedBy}
                  job={job.job}
                  pay={job.pay}
                  name={job.name}
                  phone={job.phone}
                  location={job.location}
                  description={job.description}
                  info={job.info}
                />
              </div>
            )
        )}
      </div>
    </UnclaimedJobsStyled>
  );
};

const UnclaimedJobsStyled = styled.div`
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  h2 {
    justify-content: center;
    padding: 2rem;
    font-size: 22;
    font-weight: bold;
  }
`;

export default UnclaimedJobs;
