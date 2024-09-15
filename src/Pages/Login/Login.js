import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.title = "Welcome to Goodify !";
    setAnimate(true);
  }, []);

  return (
    <div className={`login-page ${animate ? "animate" : ""}`}>
      <div className={`login-container ${animate ? "animate" : ""}`}>
        <div className="login-image">
          <img src="/assets/images/loginLeft.png" alt="Login Illustration" />
          <span>As you explore our site,</span>
          <span>
            we hope you discover only uplifting <br></br> and heartwarming
            stories.
          </span>
        </div>
        <div className="login-form">
          <div className="login-form-elements">
            <div style={{ marginTop: "8%" }}></div>
            <div className="login-form-header">Welcome to Goodify 🍀</div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
