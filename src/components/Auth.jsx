import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signInImage from "../assets/signup.jpg";

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <form onSubmit={() => {}}>
            <p>{isSignup ? "Sign Up" : "Sign In"}</p>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full name</label>
                <input
                  name="fullName"
                  type="text"
                  placeHolder="full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">user name</label>
              <input
                name="userName"
                type="text"
                placeHolder="user Name"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeHolder="phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeHolder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">password</label>
              <input
                name="password"
                type="password"
                placeHolder="password"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">confirm Password</label>
                <input
                  name="confirmPassword"
                  type="confirmPassword"
                  placeHolder="password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Aldready have an account" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? " sign In" : " sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in image" />
      </div>
    </div>
  );
}

export default Auth;
