import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { useMutation } from '@apollo/client';
import {QUERY_ME} from '../../utils/queries';
import Job from '../Job';

function Dashboard() {
  const navigate = useNavigate();
  // const [me] = useMutation(QUERY_ME);
  
  //list all jobs
  //list my jobs
  return (
    <DashboardStyled>
      <h1>Job Dashboard</h1>
      <div>
        <h2 className="title">Post a new job here:</h2>
        <a className="button" onClick={()=> navigate("/job")}>
          <span>New Job</span>
        </a>
      </div>
      <div>
        <h2 className="title">View all jobs here:</h2>
        <a className="button" href="../UnclaimedJobs">
          <span>Unclaimed Jobs</span>
        </a>
      </div>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.section`
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-align: center;

  h1 {
    font-size: 3.5em;
  }
  .title {
    font-size: 1.5em;
    padding: 3rem;
  }

  .button {
    border-radius: 3rem;
    border: none;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem;
    color: #fff;
    background-color: #555;

    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
  }
`;

export default Dashboard;
