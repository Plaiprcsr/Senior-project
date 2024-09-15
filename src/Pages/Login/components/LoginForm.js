import React, { useState } from "react";
import "./LoginForm.css";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  // set state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //handle value change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-wrapper">
      <form action="">
        <div className="login-input-box">
          <label className="login-label-text">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <i className="bx bxs-user"></i>
        </div>
        <div style={{ marginTop: "70px" }}></div>
        <div className="login-input-box">
          <label className="login-label-text">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeOff size={24} color="#808080" />
            ) : (
              <Eye size={24} color="#808080" />
            )}
          </button>
        </div>
        <div style={{ marginTop: "50px" }}></div>
        <div className="login-remember-forget">
          <a href="/">Forgot password?</a>
        </div>
        <div style={{ marginTop: "35px" }}></div>
        <button type="submit" className="login-btn" disabled={!isFormValid}>
          Login
        </button>
      </form>
      <div style={{ marginTop: "5%" }}></div>
      <div className="login-register-link">
        <p>
          Don't have an account?
          <a href="/Register">Register</a>
        </p>
      </div>
      <div className="login-separator">
        <span>OR</span>
      </div>
      <div style={{ marginTop: "35px" }}></div>
      <button type="submit" className="login-btn-facebook">
        <img
          src="/assets/images/facebook.png"
          alt="Facebook"
          className="login-btn-facebook-icon"
        />
        <span className="login-btn-facebook-text">Login With Facebook</span>
      </button>
    </div>
  );
};

export default LoginForm;
