import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signInImage from "../assets/signup.jpg";

const cookies=new Cookies()


const initialState={
  fullName:'',
  userName:'',
  phoneNumber:'',
  avatarURL:'',
  password:'',
  confirmPassword:''
}

function Auth() {
  
    const [form,setForm]=useState(initialState)
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = (e) => {
  setForm({...form,[e.target.name]:e.target.value})
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const {fullName,userName,password,phoneNumber,avatarURL}=form
    const URL='http://localhost:5000/auth'
    const {data:{token,userId,hashedPassword}}=await axios.post(`${URL}/${isSignup ?'signup' :'login'}`,{fullName,userName,password,phoneNumber,avatarURL})
  }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <form onSubmit={handleSubmit}>
            <p>{isSignup ? "Sign Up" : "Sign In"}</p>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="full Name"
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
                placeholder="user Name"
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
                  placeholder="phone Number"
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
                  placeholder="Avatar URL"
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
                placeholder="password"
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
                  placeholder="password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
                <button>{isSignup? "sign Up" : "signIn"}</button>
            </div>
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
