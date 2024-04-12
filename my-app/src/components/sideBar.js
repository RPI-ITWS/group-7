import React from "react";
import { Link } from "react-router-dom";
import Museum_Icon from ".././images/HomeIcon.svg";
import Profile_Icon from ".././images/ProfileIcon.svg";
import Nav_Logo from ".././images/Nav_Logo.png";
import Book_Icon from ".././images/BookIcon.svg";

const SideBar = () => {
  return (
    <div
      style={{
        transform: "scale(0.8)",
        width: "100%",
        height: "100%",
        position: "relative",
        paddingLeft: "30px",
      }}
    >
      <div
        style={{
          width: 158,
          height: 965,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#FDF3DE",
        }}
      ></div>
      <div
        style={{
          width: 102.23,
          height: 121.5,
          left: 3,
          top: 90,
          position: "relative",
        }}
      >
        <img
          src={Nav_Logo}
          alt="Profile Logo"
          style={{ width: "110%", display: "block" }}
        />
      </div>
      <div
        style={{
          width: 50,
          height: 43.52,
          left: 30,
          top: 230,
          position: "relative",
        }}
      >
        <Link to="/home">
          <img
            src={Museum_Icon}
            alt="Museum Logo"
            style={{ width: "115%", display: "block" }}
          />
        </Link>
      </div>
      <div
        style={{
          width: 45,
          height: 50.25,
          left: 30,
          top: 350,
          position: "relative",
        }}
      >
        <Link to="/book">
          <img
            src={Book_Icon}
            alt="Book Logo"
            style={{ width: "128%", display: "block" }}
          />
        </Link>
      </div>
      <div
        style={{
          width: 50,
          height: 55,
          left: 30,
          top: 450,
          position: "relative",
        }}
      >
        <Link to="/profile">
          <img
            src={Profile_Icon}
            alt="Profile Logo"
            style={{ width: "112%", display: "block" }}
          />
        </Link>
      </div>
      <div
        style={{
          width: 100,
          left: 9,
          top: 550,
          position: "relative",
          color: "#4B4338",
          fontSize: 18,
          fontFamily: "Kumbh Sans",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Hello, Username!
      </div>
    </div>
  );
};

export default SideBar;
