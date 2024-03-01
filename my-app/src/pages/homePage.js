import React from "react";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";

import Hero from "../components/homepage/HeroSection.jsx";
import Mission from "../components/homepage/MissionStatement.jsx";
import SellingPointL from "../components/homepage/SellingPointL.jsx";
import SellingPointR from "../components/homepage/SellingPointR.jsx";
import FinalSell from "../components/homepage/Final.jsx";
import "./homePage.css";

import BMFA from "../images/homeImages/bostonMFA.jpg";
import AMNH from "../images/homeImages/newyorkNatHist.jpg";
import MOMA from "../images/homeImages/MOMA.jpg";

function homePage() {
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
            justifyContent: "left",
            //alignItems: "flex-start",
            // height: "82vh",
            borderRadius: "20px",
            background: "#E2D6C0",
            marginRight: "40px",
            marginLeft: "170px",
            paddingTop: "20px",
          }}
        >
          <main>
            <Hero />
            <Mission />
            <SellingPointL
              museumImg={BMFA}
              imgWidth={250}
              museumName="Boston Museum of Fine Arts"
              sellingTitle="Selling Point #1"
              sellingText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
              sellingText2="Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat."
            />

            <SellingPointR
              museumImg={AMNH}
              imgWidth={350}
              museumName="American Museum of Natural History"
              sellingTitle="Selling Point #2"
              sellingText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
              sellingText2="Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat."
            />

            <SellingPointL
              museumImg={MOMA}
              imgWidth={300}
              museumName="NYC Museum of Modern Art"
              sellingTitle="Selling Point #3"
              sellingText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
              sellingText2="Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat."
            />

            <FinalSell />
          </main>
        </div>
      </div>
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
export default homePage;
