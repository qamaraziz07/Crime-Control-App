import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate ,useParams } from "react-router";
import Input from "../../Components/Input";
import { auth } from "../../firebase";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar/NavbarHome";

const Userlogin = () => {
 const {id}=useParams();
 console.log({id});
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
      const {uid,email,accessToken} = userCredential.user;
      console.log({uid,accessToken,email});
      const data={uid,email,accessToken}
      console.log({data});
      localStorage.setItem('user',JSON.stringify(data))
      

      navigate('/dashboard');
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleClick() {
    navigate(`/signup/${id}`);
  }
  return (<>
    <Navbar/>
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
        <Button type="submit" title="LOGIN" />
      </form>
      <p>OR</p>
      <p>Create Account</p>
      <Button type="submit" title="SIGNUP" onClick={handleClick}/>
    
    </div>
    </>
  );
};

export default Userlogin;
