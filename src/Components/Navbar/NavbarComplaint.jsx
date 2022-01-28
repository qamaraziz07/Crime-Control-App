import React from "react";
import { Link } from "react-router-dom";


const NavbarComplaint = () => {

  return (
    <>
    <div className="navComp">
    <div className="logo">
      Complaints
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/missing">REPORT COMPLAINTS</Link>
      </li>
      <li>
        <Link to="/missing">VIEW COMPLAINT</Link>
      </li>
      
      </ul>
    </nav>
    </div>
    </>

  );
};

export default NavbarComplaint;
