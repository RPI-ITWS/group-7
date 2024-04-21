import React, { useState } from 'react';
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import MuseumImage from "../images/MakeAcc.png";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // Import both signInWithEmailAndPassword and createUserWithEmailAndPassword
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "./login.css";

const firebaseConfig = {
  apiKey: "AIzaSyC2B-rB_mjqcGfEN1VL1ToB2Lbv2R6kY1k",
  authDomain: "museo-c5cbf.firebaseapp.com",
  projectId: "museo-c5cbf",
  storageBucket: "museo-c5cbf.appspot.com",
  messagingSenderId: "952429436912",
  appId: "1:952429436912:web:410d39075fa9374bdd8735",
  measurementId: "G-D7V1H8RM60"
};
firebase.initializeApp(firebaseConfig);

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true); // State to track login or signup mode

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
      // Additional actions after successful login
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login errors
    }
  };

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up successfully");
      // Additional actions after successful sign-up
    } catch (error) {
      console.error("Sign up error:", error.message);
      // Handle sign-up errors
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode); // Toggle between login and signup mode
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: "#E2D6C0", width: "100%", height: "100%" }}
    >
      <div
        style={{ width: "100%", height: "30px", backgroundColor: "#FDF3DE" }}
      ></div>
      <div style={{ backgroundColor: "#FDF3DE" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "82vh",
            borderRadius: "50px",
            background: "#E2D6C0",
            marginRight: "40px",
            marginLeft: "170px",
            paddingTop: "20px",
            overflow: "hidden",
          }}
        >
          <div>
            <br />
            <br />
            <br />
            {isLoginMode ? (
              <h1
                style={{
                  color: "#E4622E",
                  marginBottom: "0",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: "300",
                }}
              >
                Log into Your Museo Account
              </h1>
            ) : (
              <h1
                style={{
                  color: "#E4622E",
                  marginBottom: "0",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: "300",
                }}
              >
                Create your Museo Account
              </h1>
            )}
            <h3>
              {isLoginMode
                ? "Enter your details below to log in!"
                : "Enter your details below and start collecting!"}
            </h3>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  margin: "2%",
                  marginTop: "0px",
                  textAlign: "left",
                  fontSize: "18px",
                  marginRight: "50px",
                }}
              >
                <form>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  {!isLoginMode && ( // Show confirm password field only in signup mode
                    <>
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <br />
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                      <br />
                    </>
                  )}
                </form>
                {isLoginMode ? (
                  <button onClick={handleLogin}>Log In</button>
                ) : (
                  <button onClick={handleSignUp}>Create Account</button>
                )}
                <br />
                <button onClick={toggleMode}>
                  {isLoginMode ? "Switch to Sign Up" : "Switch to Log In"}
                </button>
              </div>
              <img
                src={MuseumImage}
                alt="A patinaed statue from the Louvre of a man looking up"
                width="590"
                id="accountCreationImg"
                height={"auto"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
export default LogIn;
