import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { auth } from "../../firebase";

const RegisterUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();

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
      navigate(`/userlogin/${userID}.${id}`);
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleClick() {
    navigate("/userlogin");
  }
  return (
    <div className="form">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="Name"
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
        <Button type="submit" title="Register"/>
      </form>
        <Button type="submit" title="Login" onClick={handleClick}/>
    </div>
  );
};

export default RegisterUser;
