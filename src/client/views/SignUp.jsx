import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData((prevState) => {
      setFormData({
        ...prevState,
        [event.target.id]: event.target.value,
      });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login" style={{ background: "white", height: "100vw" }}>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Sign Up!</p>
        </header>

        <form>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />

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

          <div className="signUpBar">
            <button className="signUpButton">Sign Up</button>
          </div>
        </form>

        {/*  Google OAuth */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
