import React from "react";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import MuseamImage from "../images/Museam.png";
// Form update useState
import { useState } from "react";
// Imports for firebase 
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from "firebase/auth";

function LogIn() {

  // Hold email 
  const [email, setEmail] = useState("");
  // Hold password
  const [password, setPassword] = useState("");

  // Initialize Firebase auth
  const app = initializeApp(process.env.firebaseConfig);
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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
            <h1
              style={{
                fontFamily: "Della Respira, serif",
                color: "#E4622E",
                marginBottom: "0",
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "300",
              }}
            >
              Create your Museo Account
            </h1>
            <p
              style={{
                fontFamily: "Della Respira, serif",
                fontSize: "21px",
                textAlign: "center",
                marginTop: "0px",
                fontWeight: "300",
                marginLeft: "5px",
              }}
            >
              Enter your details below and start collecting!
            </p>
            <div
              style={{ display: "flex", fontFamily: "Della Respira, serif" }}
            >
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
                  <label for="username">Username:</label>
                  <br></br>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    style={{
                      backgroundColor: "#FDF3DE",
                      borderRadius: "15px",
                      border: "none",
                      marginBottom: "10px",
                      height: "28px",
                      width: "300px",
                    }}
                  ></input>
                  <br></br>
                  <label for="email">Email:</label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    style={{
                      backgroundColor: "#FDF3DE",
                      borderRadius: "15px",
                      border: "none",
                      marginBottom: "10px",
                      height: "28px",
                      width: "400px",
                    }}
                    // Update email
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <br></br>
                  <label for="password">Password:</label>
                  <br></br>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    style={{
                      backgroundColor: "#FDF3DE",
                      borderRadius: "15px",
                      border: "none",
                      marginBottom: "10px",
                      height: "28px",
                      width: "400px",
                    }}
                    // Update password
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br></br>
                  <label for="confirmPassword">Confirm Password:</label>
                  <br></br>
                  <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    style={{
                      backgroundColor: "#FDF3DE",
                      borderRadius: "15px",
                      border: "none",
                      marginBottom: "10px",
                      height: "28px",
                      width: "400px",
                    }}
                  ></input>
                  <br></br>
                  <input type="checkbox" name="rememberMe" />
                  <label> Remember Me </label>
                </form>

                <p style={{ fontSize: "10px" }}>
                  By creating an account you agree to our Terms & Privacy
                </p>
                <button
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    margin: "4px 2px",
                    cursor: "pointer",
                    borderRadius: "50px",
                    backgroundColor: "#fdf3de",
                    border: "2px solid",
                    fontFamily: "Kumbh Sans",
                    color: "#e4622e",
                    padding: "5px 25px",
                    fontSize: "18px",
                    transition: "ease-in-out 0.25s",
                  }}
                >
                  Create Account
                </button>
              </div>

              <img
                src={MuseamImage}
                alt="Museam"
                width="500"
                height="333"
                style={{
                  borderRadius: "30px",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              ></img>
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
