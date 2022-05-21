import React from 'react'
import styled from 'styled-components'

const Job = (props) => {
   const {id, claimed, claimedBy, job, pay, name, phone, location, description, info} = props;

   const claimJob = (id) => {
      console.log(id)
      //use this id to make api call to claim job
   } 
  return (
    <JobStyled>
      <div className='goodJob'><span className='title'>Good Job: </span>{job}</div>
        <ul>
          <li><span className='title'>Pay: </span>{pay}</li>
          <li><span className='title'>Name: </span>{name}</li>
          <li><span className='title'>Phone number: </span>{phone}</li>
          <li><span className='title'>Location: </span>{location}</li>
          <li><span className='title'>Description of Job: </span>{description}</li>
          <li><span className='title'>Additional info: </span>{info}</li>
        </ul>
      <button onClick={()=>claimJob(id)}>Claim Job</button>
    </JobStyled>
  )
}

const JobStyled = styled.section`
  padding: 3rem;
  background-color: #3BB57533;
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
    color: #0c6135
  }

  button {
    border-radius: 1rem;
    font-size: 12px;
  }
`

export default Job
