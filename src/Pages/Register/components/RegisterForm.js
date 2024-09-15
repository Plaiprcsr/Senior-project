import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  // Set state
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle value change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex
  const isPasswordValid = (password) => password.length >= 6; // Basic password length check
  const doPasswordsMatch = (password, confirmPassword) =>
    password === confirmPassword;

  const isFormValid =
    name.trim() !== "" &&
    surname.trim() !== "" &&
    username.trim() !== "" &&
    isEmailValid(email) &&
    isPasswordValid(password) &&
    doPasswordsMatch(password, confirmPassword);

  return (
    <div>
      <form action="">
        <div className="register-wrapper">
          <span className="register-form-header">Personal Information</span>
          <div className="register-input-container">
            <div className="register-input-box">
              <label className="register-label-text">Name</label>
              <input
                type="text"
                placeholder="Annette"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Surname</label>
              <input
                type="text"
                placeholder="Laura"
                value={surname}
                onChange={handleSurnameChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Birthdate</label>
              <input
                type="text"
                placeholder="Annette"
                value={surname}
                onChange={handleSurnameChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Gender</label>
              <input
                type="text"
                placeholder="Annette"
                value={surname}
                onChange={handleSurnameChange}
              />
            </div>
          </div>
          {/* spacer */}
          <div style={{ marginTop: "3%" }}></div>
          <span className="register-form-header">Account Information</span>
          <div className="register-input-container">
            <div className="register-input-box">
              <label className="register-label-text">Username</label>
              <input
                type="text"
                placeholder="Annette"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Email</label>
              <input
                type="text"
                placeholder="Annette"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Password</label>
              <input
                type="password"
                placeholder="Annette"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="register-input-box">
              <label className="register-label-text">Confirm Password</label>
              <input
                type="password"
                placeholder="Annette"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
        </div>
        <div className="register-btn-container" style={{ marginTop: "6%" }}>
          <button
            type="submit"
            className="register-btn"
            disabled={!isFormValid}
          >
            Next
          </button>
        </div>
      </form>
      <div className="register-form-separator">
        <span>OR</span>
      </div>
      <div className="register-btn-container">
        <button type="submit" className="register-btn-facebook">
          <img
            src="/assets/images/facebook.png"
            alt="Facebook"
            className="register-btn-facebook-icon"
          />
          <span className="register-btn-facebook-text">
            Login With Facebook
          </span>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
