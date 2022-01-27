import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import Input from "../../Components/Input";
import { auth } from "../../firebase";
import Button from "../../Components/Button";

const Userlogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const userID = userCredential.user.uid;
      navigate(`/dashboard,${userID}`);
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleClick() {
    navigate("/userRegister");
  }
  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          type="Password"
          placeholder="password"
          value={user.password}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button type="submit" title="Login" />
      </form>
      
      <Button type="submit" title="Register" onClick={handleClick}/>
    
    </div>
  );
};

export default Userlogin;
