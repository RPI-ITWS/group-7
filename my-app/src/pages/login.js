import React from "react";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import MuseumImage from "../images/MakeAcc.png";
import "./login.css";

function LogIn() {
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
            borderRadius: "20px",
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
                color: "#E4622E",
                marginBottom: "0",
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "300",
              }}
            >
              Create your Museo Account
            </h1>
            <h3>Enter your details below and start collecting!</h3>
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
                  <label for="username">Username:</label>
                  <br></br>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    style={{ width: "300px" }}
                  ></input>
                  <br></br>
                  <label for="email">Email:</label>
                  <br></br>
                  <input type="text" id="email" name="email"></input>
                  <br></br>
                  <label for="password">Password:</label>
                  <br></br>
                  <input type="text" id="password" name="password"></input>
                  <br></br>
                  <label for="confirmPassword">Confirm Password:</label>
                  <br></br>
                  <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                  ></input>
                  <br></br>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <label> Remember Me </label>
                </form>

                <p>By creating an account you agree to our Terms & Privacy</p>
                <button>Create Account</button>
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
