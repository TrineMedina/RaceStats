import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData((prevState) => {
      setFormData({
        ...prevState,
        [event.target.id]: event.target.value,
      });
    });
  };

  return (
    <div className="mainContainer" style={{ background: "white" }}>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              // src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => {
                setShowPassword((prevState) => {
                  !prevState;
                });
              }}
            />
          </div>
          <Link to="/forgot-password" className="forgotPassword">
            Forgot Password
          </Link>

          <div className="signInBar">
            <button className="signInButton">Sign In</button>
          </div>
        </form>

        {/*  Google OAuth */}

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
