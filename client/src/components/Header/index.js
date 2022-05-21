import React, {useState} from 'react';
import Dashboard from "../Dashboard";
import Claimed from "../Claimed";
import Unclaimed from "../Unclaimed"
import Nav from "../Nav";

function Header () {
    const [currentPage, handlePageChange] = useState("Dashboard");
    const renderPage = () => {
        switch (currentPage) {
            case "Dashboard":
                return <Dashboard/>;
            case "Claimed":
                return <Claimed/>;
            case "Unclaimed":
                return <Unclaimed/>;
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