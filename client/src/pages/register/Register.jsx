import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [error, Seterror] = useState("");

  const handleRegistration = async(e)=>{
    e.preventDefault();
   try {await axios.post("/auth/register",{username,email,password})
   navigate("/login");
  }
   catch(err){
    // Seterror(err.response.data);
    console.log("error")}
  }

  return (
    <div className="register">
      <div className="container">
        <h1 className="h1">Register</h1>
        
          <form action="" className="form" onSubmit={handleRegistration}>
          
              
            <label className="label">UserName</label>
            <input
              className="input"
              type="text"
              placeholder="Enter username without space"
              onChange={(e) => setuser(e.target.value)}
            />
            <span className="warning">No space in Username</span>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="button" >
              Register Me
            </button>
          </form>
        
        
      </div>
    </div>
  );
};

export default Register;
