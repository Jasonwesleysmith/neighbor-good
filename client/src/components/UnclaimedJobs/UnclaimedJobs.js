import React from 'react';
import Job from '../Job';
import { useMutation } from '@apollo/client';
import { UNCLAIMED_JOBS} from '../../utils/queries';
import styled from 'styled-components';


const UnclaimedJobs = ({ jobs }) => {
  // const [unclaimedJobs] = useMutation(UNCLAIMED_JOBS);
  return (
    <UnclaimedJobsStyled>
      <h2>Unclaimed Jobs</h2>
      <div className='grid'>
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
`

export default UnclaimedJobs;
