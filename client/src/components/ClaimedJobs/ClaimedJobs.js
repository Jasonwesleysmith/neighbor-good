import React from 'react'
import Job from '../Job'
import { useMutation } from '@apollo/client';
import {QUERY_ME, MY_JOBS} from '../../utils/queries';


//get from auth
const currentUser = 'Jason'

const ClaimedJobs = ({jobs}) => {
  // const [myJobs] = useMutation(MY_JOBS);
  
  return (
      <>
      <h2>My Jobs</h2>
      {jobs.map((job) => (
        job.claimed && job.claimedBy === currentUser && <Job id={job.id} claimed={job.claimed} claimedBy={job.claimedBy} job={job.job} pay={job.pay} date={job.date} time={job.time} name={job.name} phone={job.phone} location={job.location} description={job.description} info={job.info} />
      ) )}
      </>
    )
}

export default ClaimedJobs;