import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      if (!name || !email || !password || !agreeToTerms) {
        alert("Please fill in all fields and agree to the terms.");
        return;
      }
      // Handle sign-up logic here
      console.log("Sign Up:", { name, email, password });
    } else if (currentState === "Login") {
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      // Handle login logic here
      console.log("Login:", { email, password });
    } else if (currentState === "Password Reset") {
      if (!email || !otp) {
        alert("Please fill in all fields.");
        return;
      }
      // Handle password reset logic here
      console.log("Password Reset:", { email, otp });
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>

        <div className='login-popup-inputs'>
          {currentState === "Sign Up" && (
            <input
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          {currentState === "Password Reset" ? (
            <>
              <input
                type='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='text'
                placeholder='OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type='button'>Request OTP</button>
            </>
          ) : (
            <>
              <input
                type='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          )}
        </div>

        {currentState !== "Password Reset" && (
          <button type='submit'>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        )}

        <div className='login-popup-condition'>
          {currentState === "Sign Up" && (
            <>
              <input
                type='checkbox'
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                required
              />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </>
          )}
          {currentState === "Login" && (
            <p>
              <span onClick={() => setCurrentState("Password Reset")} style={{ cursor: "pointer" }}>
                Forgot password?
              </span>
            </p>
          )}
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrentState("Sign Up")} style={{ cursor: "pointer" }}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrentState("Login")} style={{ cursor: "pointer" }}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;