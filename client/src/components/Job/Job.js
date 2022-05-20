import React from 'react'

const Job = (props) => {
   const {job, pay, name, phone, location, description, info} = props;
  return (
    <div style={{padding: '3rem', backgroundColor: '#333333aa', margin: '1rem'}}>
      <div>Good Job: {job}</div>
      <div>Pay: {pay}</div>
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Phone number: {phone}</li>
      </ul>
      <div>Location: {location}</div>
      <div>Description of Job: {description} </div>
      <div>Additional info: {info} </div>
      </div>
    </div>
  )
}

export default Job
