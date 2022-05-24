import React, {useState} from 'react'
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import {useNavigate} from "react-router-dom";

const NewJob = () => {
    const navigate = useNavigate();
    // const [addJob] = useMutation(ADD_JOB);
    const [jobData, setJobData] = useState({
        job: '',
        pay: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        location: '',
        description: '',
        info: '',
    })

    const submitJob = (e) => {
        e.preventDefault()
        //submit data w api call
        //clear form if stay on same page
        //or navigate to my jobs or dashboard
        console.log(jobData)
        navigate("/dashboard")
    }

    
  return (
    <NewJobStyled>
        <label htmlFor="job">Job:</label>
        <input value={jobData.job} onChange={(e)=> setJobData({...jobData, job: e.target.value})} id="job" type="text" />
        <label type="text" htmlFor="pay">Pay</label>
        <input value={jobData.pay} onChange={(e)=> setJobData({...jobData, pay: e.target.value})} id="pay" type="text"/>
        <label type="text" htmlFor="date">Date:</label>
        <input value={jobData.date} onChange={(e)=> setJobData({...jobData, date: e.target.value})} id="date" type="text" />
        <label type="text" htmlFor="time">Time:</label>
        <input value={jobData.time} onChange={(e)=> setJobData({...jobData, time: e.target.value})} id="time" type="text" />
        <label type="text" htmlFor="name">Name:</label>
        <input value={jobData.name} onChange={(e)=> setJobData({...jobData, name: e.target.value})} id="name" type="text" />
        <label type="text" htmlFor="phone">Phone number:</label>
        <input value={jobData.phone} onChange={(e)=> setJobData({...jobData, phone: e.target.value})} id="phone" type="text" />
        <label type="text" htmlFor="location">Location:</label>
        <input value={jobData.location} onChange={(e)=> setJobData({...jobData, location: e.target.value})} id="location" type="text" />
        <label type="text" htmlFor="description">Description of Job:</label>
        <input value={jobData.description} onChange={(e)=> setJobData({...jobData, description: e.target.value})} id="description" type="text" />
        <label type="text" htmlFor="additional">Additional info:</label>
        <input value={jobData.info} onChange={(e)=> setJobData({...jobData, info: e.target.value})} id="additional" type="text" />
        <button onClick={submitJob}>Create Job</button>
    </NewJobStyled>
  )
}

export default NewJob

const NewJobStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-bottom: 1rem;
        max-width: 350px;
    }
`
    
