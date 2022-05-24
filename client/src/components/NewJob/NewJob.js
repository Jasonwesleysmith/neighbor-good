import React from 'react'
import styled from 'styled-components';

const NewJob = () => {
  return (
    <NewJobStyled>
        <label htmlFor="job">Good job:</label>
        <input id="job" type="text" />
        <label type="text" htmlFor="pay">Pay</label>
        <input id="pay" type="text"/>
        <label type="text" htmlFor="date">Date:</label>
        <input id="date" type="text" />
        <label type="text" htmlFor="time">Time:</label>
        <input id="time" type="text" />
        <label type="text" htmlFor="name">Name:</label>
        <input id="name" type="text" />
        <label type="text" htmlFor="phone">Phone number:</label>
        <input id="phone" type="text" />
        <label type="text" htmlFor="location">Location:</label>
        <input id="location" type="text" />
        <label type="text" htmlFor="description">Description of Job:</label>
        <input id="description" type="text" />
        <label type="text" htmlFor="additional">Additional info:</label>
        <input id="additional" type="text" />
        <button>Create Job</button>
    </NewJobStyled>
  )
}

export default NewJob

const NewJobStyled = styled.form`
    display: flex;
    flex-direction: column;
    /* max-width: 350px; */
    justify-content: center;
    input {
        margin-bottom: 1rem;
    }
`
    
