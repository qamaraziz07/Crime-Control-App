import React from 'react';
import Navbar from '../Components/Navbar/NavbarHome';
import Searchcrimes from './Searchcrimes';

const CrimeDetails = () => {
  return <div>
      <Navbar/>
<h1 className='head'>Crime Details</h1>
      <Searchcrimes/>
  </div>
};

export default CrimeDetails;
