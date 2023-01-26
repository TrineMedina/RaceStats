import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/StyledButton";
import "./signin.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ userName: "", password: "" });

  // const { email, password } = formData;

  const onChange = (event) => {
    event.preventDefault();
    setFormData((prevState) => {
      setFormData({
        ...prevState,
        [event.target.id]: event.target.value,
      });
    });
  };

  const handleSignIn = () => {
    console.log(formData);
  };

  return (
    <div className="signInWrapper">
      <div className="pageContainer">
        <h3 className="pageHeader">Sign in to access Race Stats</h3>

        <form>
          <input
            type="text"
            className="userName"
            placeholder="User Name"
            id="userName"
            // value={formData.email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              // value={formData.password}
              onChange={onChange}
            />

            {/*<img*/}
            {/*  // src={visibilityIcon}*/}
            {/*  alt="show password"*/}
            {/*  className="showPassword"*/}
            {/*  onClick={() => {*/}
            {/*    setShowPassword((prevState) => {*/}
            {/*      !prevState;*/}
            {/*    });*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
          {/*<Link to="/forgot-password" className="forgotPassword">*/}
          {/*  Forgot Password*/}
          {/*</Link>*/}

          <div className="signInBar">
            <Button className="signInButton" onClick={handleSignIn}>
              Sign In
            </Button>
          </div>
        </form>

        {/*  Google OAuth */}
        {/*<Link to="/sign-up" className="registerLink">*/}
        {/*  Sign Up Instead*/}
        {/*</Link>*/}
      </div>
    </div>
  );
}

export default SignIn;
