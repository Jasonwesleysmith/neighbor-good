import React from "react";
import styled from 'styled-components'

function Dashboard() {
  
    return (
        <>
            <DashboardStyled>
                <h1>Dashboard</h1>
            </DashboardStyled>
            <div>
                <TitleStyled>
                    <h2>New Job</h2>
                </TitleStyled>
                <ButtonStyled>
                    <a className="button" href="../Job" target="_blank" rel="noreferrer">
                        <h3>New Job</h3>
                    </a>
                </ButtonStyled>
            </div>
            <div>
                <TitleStyled>
                    <h2>All Jobs</h2>
                </TitleStyled>
                <ButtonStyled>
                    <a className="button" href="../UnclaimedJobs" target="_blank" rel="noreferrer">
                        <h3>Open Jobs</h3>
                    </a>
                </ButtonStyled>
            </div>
        </>
    )

}

const DashboardStyled = styled.section `
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    text-align: center;
`
const ButtonStyled = styled.section `
    font-size: .75em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    text-align: center;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
`;

const TitleStyled = styled.section `
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    text-align: center;

`

export default Dashboard;