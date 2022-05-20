import React from 'react'
import Job from '../Job'



const UnclaimedJobs = ({jobs}) => {

  return (
      <>
      <h2>Unclaimed Jobs</h2>
      {jobs.map((job) => (
        <Job job={job.job} pay={job.pay} name={job.name} phone={job.phone} location={job.location} description={job.description} info={job.info} />
      ) )}
      </>
    )
}

export default UnclaimedJobs