import React, { useEffect, useState } from "react";
import "./Register.css";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.title = "Welcome to Goodify !";
    setAnimate(true);
  }, []);

  return (
    <div className={`register-page ${animate ? "animate" : ""}`}>
      <div className={`register-container ${animate ? "animate" : ""}`}>
        <div className={"register-header"}>
          Create Your Account🌈
          <p>
            Already have an account ?<a href="/">Login</a>
          </p>
        </div>
        <div className="register-separator"></div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
