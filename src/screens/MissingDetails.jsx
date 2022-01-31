import React from 'react';
import Navbar from '../Components/Navbar/NavbarHome';
import Searchmissing from './Searchmissing';
const MissingDetails = () => {
  return <div>
      <Navbar/>
      <h1 className='head'>Missing Details </h1>
      <Searchmissing/>
  </div>
};

export default MissingDetails;
