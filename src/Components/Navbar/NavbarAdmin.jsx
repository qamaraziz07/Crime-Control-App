import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return <div>
      <>
    <div className="nav">
    <div className="logo">
      Reporting App
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/admindashboard">CHECK STATUS</Link>
      </li>
      <li>
        <Link to="/crimereport">CRIMES</Link>
      </li>
      <li>
        <Link to="/missingreport">MISSING PERSONS</Link>
      </li>
      <li>
        <Link to="/complaint">COMPLAINT</Link>
      </li>
       <li>
        <Link to="/">LOGOUT</Link>
      </li>
      </ul>
    </nav>
    </div>
    </>
  </div>
};

export default NavbarAdmin;
