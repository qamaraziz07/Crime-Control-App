import React,{useState} from 'react';
import Button from '../../Components/Button';
import Input from "../../Components/Input";
import {useNavigate} from 'react-router'
import Navbar  from '../../Components/Navbar/NavbarHome';
const Adminlogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    username:"",
    password:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (admin.username === "admin" && admin.password === "0000") {
      setAdmin({
        username: "",
        password: "",
      });
      navigate("/admindashboard");
    }
  };


  return <>
    <Navbar/>
  <div className='form'>
    <h1>Admin Login</h1>
    <form onSubmit={handleSubmit}>
      <Input
      type="name"
      placeholder="Username"
      required={true}
      value={admin.username}
      onChange={(value)=>{
        setAdmin((prev)=>({
          ...prev,
          username: value,
        }));
      }}
      />
      <Input
          type="password"
          placeholder="Password "
          required={true}
          value={admin.password}
          onChange={(value) => {
            setAdmin((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
          <Button  type="submit" title="Login" />
    </form>
  </div>;
  </>
};

export default Adminlogin;
