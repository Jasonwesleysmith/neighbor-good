import React, {useState} from 'react';
import Dashboard from "../Dashboard";
import ClaimedJobs from "../ClaimedJobs";
import UnclaimedJobs from "../UnclaimedJobs"
import Nav from "../Nav";

function Header () {
    const [currentPage, handlePageChange] = useState("Dashboard");
    const renderPage = () => {
        switch (currentPage) {
            case "Dashboard":
                return <Dashboard/>;
            case "Claimed":
                return <ClaimedJobs/>;
            case "UnclaimedJobs":
                return <UnclaimedJobs/>;
            default:
                return <Dashboard/>;
        }
    };
    return (
        <div>
            <Nav
                currentPage= {currentPage}
                handlePageChange= {handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;