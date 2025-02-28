import React from 'react';
import './Home.css';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='mainContainer'>
      <div className='headerSection'>
        <div className='headerSectionPart1'>
            <h3>Bluestock Infotech</h3>
        </div>
        <div className='headerSectionPart2'>
          <div className='searchBar'>
            <form >
              <input className='search' type='text' placeholder='Search Here'/>
            </form>
          </div>
        </div>
      </div>
      <div className="bodySection">
        <div className="navBar">
        <div className='menu'>MENU</div>
          <div className='navLinks'>
            <Link className='link' to="dashboard">Dashboard</Link>
            <Link className='link' to="manageIPO">Manage IPO</Link>
            <Link className='link' to="">IPO Subscription</Link>
            <Link className='link' to="">IPO Allotment</Link>
          </div>
          <div className='menu'>OTHERS</div>
          <div className='navLinks'>
            <Link className='link' to="">Settings</Link>
            <Link className='link' to="">API Manager</Link>
            <Link className='link' to="">Accounts</Link>
            <Link className='link' to="">Help</Link>
          </div>
        </div>
        <div className='fakeNavBar'></div>
        <div className="section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
