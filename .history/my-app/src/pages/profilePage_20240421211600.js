import React from "react";
//import  { useEffect, useState } from 'react';
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import "./profilePage.css";
import ProfileBanner from "../components/profilepage/ProfileBanner";
import MuseumList from "../components/profilepage/MuseumList";
import FriendsList from "../components/profilepage/FriendsList";
import { Navigate } from "react-router-dom";



function ProfilePage(params) {
  const { message } = params;

  if (!document.cookie) {
    return <Navigate to="/login" />;
  }
  return (
    <div
      className="App"
      style={{ backgroundColor: "#E2D6C0", width: "100%", height: "100%" }}
    >
      <div
        style={{ width: "100%", height: "30px", backgroundColor: "#FDF3DE" }}
      ></div>

      <div style={{ backgroundColor: "#FDF3DE" }}>
        <div id="main_content">
          <div class="profilepage_parent">
            <div className="title">
              <h2 style={{ textAlign: "center" }}>Your Profile</h2>
            </div>
            <div class="profileBanner box">
              <ProfileBanner message={message} />
            </div>
            <div className="columns">
              <div className="visitedMuseums box">
                <MuseumList params={{ listType: "Visited Museums" }} message={message} />
              </div>
              <div className="savedMuseums box">
                <MuseumList params={{ listType: "Saved Museums" }} message={message} />
              </div>
              <div className="friendsList box">
                {" "}
                <FriendsList message={message}/>
              </div>
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
export default ProfilePage;