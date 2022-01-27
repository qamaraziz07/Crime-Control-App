import React from 'react';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
const Admindashboard = () => {
  const navigate=useNavigate();
  return (
    <div className="form">
      <h1>Admin Dashboard</h1>
     
      <Button
        title="Complaints"
        onClick={() => {
          navigate("/complain");
        }}
      />
      <Button
        title="Crime Reports"
        onClick={() => {
          navigate("/crimereport");
        }}
      />
      <Button
        title="Missing Persons"
        onClick={() => {
          navigate("/missingreport");
        }}
      />
      <Button
        title="Status"
        onClick={() => {
          navigate("");
        }}
      />
      
    </div>
  )
};

export default Admindashboard;
