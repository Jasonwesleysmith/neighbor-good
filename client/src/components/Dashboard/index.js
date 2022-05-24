import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
      <div>
        <h2 className="title">New Job</h2>
        <a className="button" onClick={()=> navigate("/job")}>
          <span>New Job</span>
        </a>
      </div>
      <div>
        <h2 className="title">All Jobs</h2>
        <a
          className="button"
          href="../UnclaimedJobs"
          target="_blank"
          rel="noreferrer"
        >
          <span>Open Jobs</span>
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
  }

  .button {
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
  }
`;

export default Dashboard;
