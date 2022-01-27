import React from "react";
import { useNavigate } from "react-router";
import Button from '../../Components/Button';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <div>
      <h1>DashBoard</h1>
    </div>
    <div className="form">

      <Button
        title="Complaint "
        onClick={() => {
          navigate("/complain");
        }}
        />
      
      <Button
        title="Crime Report"
        onClick={() => {
          navigate("/crimereport");
        }}
      />
       <Button
        title="Missing Person"
        onClick={() => {
          navigate("/missingreport");
        }}
      />
        
    </div>
    </>

  );
};

export default Dashboard;
