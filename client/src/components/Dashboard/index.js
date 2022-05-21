import React from "react";

function Dashboard() {
  
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>New Job</h2>
                <a className="button" href="../Job" target="_blank" rel="noreferrer">
                    <span>New Job</span>
                </a>
            </div>
            <div>
                <h2>All Jobs</h2>
                <a className="button" href="../UnclaimedJobs" target="_blank" rel="noreferrer">
                    <span>Open Jobs</span>
                </a>
            </div>
        </div>
    )

}

export default Dashboard;