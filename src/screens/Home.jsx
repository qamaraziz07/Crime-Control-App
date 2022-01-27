import React from "react";
import { useNavigate } from "react-router";
import Button from '../Components/Button';


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div>

      <h1>Crime Control App</h1>
    </div>
    <div className="form">

      <Button
        title="ADMIN "
        onClick={() => {
          navigate("/adminLogin");
        }}
        />
      
      <Button
        title="User"
        onClick={() => {
          navigate("/userRegister");
        }}
      />
        
    </div>
    </>

  );
};

export default Home;
