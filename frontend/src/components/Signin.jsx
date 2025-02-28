import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
// Import your logo
// import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Signin = () => {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="sign-in-container">
      <div className="form-container">
        {/* Replace text with logo */}
        <img src="/logo-placeholder.png" alt="Bluestock Logo" className="logo-signin" />
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="johndoe@gmail.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="forgot-password">
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </div>

          <div className="checkbox-container">
            <ReCAPTCHA
              sitekey="6Lere7gqAAAAADfIVh1DU1lNIWQ1VT5Z57iMmuq7"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" disabled={!recaptchaVerified} className="login-button" onClick={() => navigate("/home")}>
            Login
          </button>

          <div className="or-divider">or sign in with</div>
        </form>
        <button
          className="google-login"
          style={{
            backgroundColor: "#f1f1f1",
            color: "#333",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            padding: "1rem",
          }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABzElEQVR4Ab2WAUQDURjHDw0QIAQkAVBaMwvDJiMbY7QgFgAkAAGZZUASFiyAnQUEotMIGUKgAAYNWxY20Gyv9+d57d52X99mN/zcuee933vv/b+7sxKnyX9pxUORVixUkNe6pCMRQN3XVVuEMxbZ2E4Ej7WARwd9phbKGa/Izg2+aIwGxmAJsTUSMRcmSP2UFcgVqm0UDBzJjcKhZYSQcWZZIsVZjgz8pTEaGniI6mYnQnzCKothzfruFteFKeXL+Fh9J7DdfwyI4ZMlcIUUQDhnmRZeQDTKV3ZLnYU/wmdTiNWenReXqY6xQq8suZ6C8m6psiKFS21TiGeUTAnFDCQsQ6aEgRd/hN3c4oWL3VIIjdAgMMzQNCXvHjS9z1CVxWgtHt4lxaadIcuCkWBhgpS6Cv/jYU0E7YyGL+Ftt+vVVr0PidXKgUu4Y2de57U6PNfCVDWVM2WzSGP5nzwRmg0tBHLgTwg8pD3JkZcoaKfDmFj08k3E84NJstrY9xAHaoi85I6kpMB9T7dX90Tk9sqUuhI/NlNCxkJJXaVgfg99keKKQmf9JmJ7iTNlkg5P/SOMoOgzYmK+MGghkUIMpEKiV457pFMFaJ8z1i/ATnOr+aZzdAAAAABJRU5ErkJggg=="
            alt="Google logo"
            className="google-logo"
          />
          Continue with Google
        </button>
        <Link to="/signup" className="create-account">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Signin;
