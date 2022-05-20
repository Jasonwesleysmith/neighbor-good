import React from 'react'
import Job from '../Job'

//get from auth
const currentUser = 'Jason'

const ClaimedJobs = ({jobs}) => {

  return (
      <>
      <h2>My Jobs</h2>
      {jobs.map((job) => (
        job.claimed && job.claimedBy === currentUser && <Job id={job.id} claimed={job.claimed} claimedBy={job.claimedBy} job={job.job} pay={job.pay} name={job.name} phone={job.phone} location={job.location} description={job.description} info={job.info} />
      ) )}
      </>
    )
}

export default ClaimedJobs