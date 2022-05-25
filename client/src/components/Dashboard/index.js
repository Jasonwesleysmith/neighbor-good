import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Job from '../Job';
import UnclaimedJob from '../UnclaimedJobs';

function Dashboard() {
  const navigate = useNavigate();
  // const [me] = useMutation(QUERY_ME);

  //list all jobs
  //list my jobs
  return (
    <DashboardStyled>
      <h1>Neighborhood Jobs Dashboard</h1>

      <CardGroup>
        <Card
          style={{ width: '18rem' }}
          class="shadow-lg"
          className="card-background"
        >
          <div>
            <h2 className="title">Post a new job:</h2>
            <Button onClick={() => navigate('/job')}>New Job</Button>
          </div>
        </Card>
        <div></div>
        <Card
          style={{ width: '18rem' }}
          class="shadow-lg"
          className="card-background"
        >
          <div>
            <h2 className="title">View all jobs:</h2>
            <Button onClick={() => navigate('/unclaimedjobs')}>
              Unclaimed Jobs
            </Button>
          </div>
        </Card>
      </CardGroup>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.section`
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-align: center;

  min-height: 100%;

  h1 {
    font-size: 3.5em;
  }

  h2 {
    font-weight: bold;
  }

  .title {
    font-size: 1.5em;
    padding: 3rem;
  }

  .card-background {
    background-color: #7dc967;

    padding: 3rem;
    margin: 5rem;
    /* border-radius: 1rem; */
  }

  Button {
    border-radius: 2rem;
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
