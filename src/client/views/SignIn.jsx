import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/StyledButton";
import authUser from "../services/authenticateUserAPI";
import "./signin.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ user_name: "", password: "" });

  // const { email, password } = formData;

  const onChange = (event) => {
    // event.preventDefault();
    console.log(formData);
    setFormData((prevState) => {
      setFormData({
        ...prevState,
        [event.target.id]: event.target.value,
      });
    });
  };

  const handleAuth = (event) => {
    event.preventDefault();
    console.log("in form: ", formData);
    authUser(formData);
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
            <Button className="signInButton" onClick={handleAuth}>
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
