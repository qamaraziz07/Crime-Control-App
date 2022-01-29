import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Navbar from "../../Components/Navbar/NavbarHome";
import { auth } from "../../firebase";

const RegisterUser = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await sendEmailVerification(auth.currentUser);
      const userID = userCredential.user.uid;
      console.log(userID);
      navigate('/login');
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleClick() {
    navigate("/login");
  }
  return (
    <>
    <Navbar/>
    <div className="form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="Full Name"
          required={true}
          value={user.name}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          required={true}
          value={user.email}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          required={true}
          value={user.password}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button type="submit" title="SIGN UP"/>
      </form>
      <p>OR</p>
          <p>Already have an account?</p>
        <Button type="submit" title="LOGIN" onClick={handleClick}/>
    </div>
    </>
  );
};

export default RegisterUser;
