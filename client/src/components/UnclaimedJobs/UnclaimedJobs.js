import React from 'react';
import Job from '../Job';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';
import styled from 'styled-components';

const UnclaimedJobs = () => {
  const { loading, data } = useQuery(QUERY_JOBS);

  return (
    <UnclaimedJobsStyled>
      <h2>Unclaimed Jobs</h2>
      <div className="grid">
        {!loading &&
          data.jobs.map(
            (job) =>
              !job.claimed && (
                <Job
                  key={job._id}
                  id={job._id}
                  job={job.job}
                  pay={job.pay}
                  date={job.date}
                  time={job.time}
                  name={job.name}
                  phone={job.phoneNumber}
                  location={job.location}
                  description={job.description}
                />
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
