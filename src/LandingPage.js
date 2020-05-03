import React from "react";
import './LandingPage.css';
import logo from "./assets/images/BCHblack.png";

function LandingBody() {
    return (
        <div className="landingBody">
            <div className="landingTextWhite">
                <h1 className="landingTextWhiteText">
                    Welcome To 
                </h1>
                <h1 className="landingTextWhiteText">
                    Bellaria Coffee House
                </h1>
                <img src={logo} className="logo"/>
                <div className="desktopText clickMe">
                    Click anywhere to Enter
                </div>
                <div className="mobileText clickMe">
                    Tap anywhere to Enter
                </div>
            </div>
        </div>
    )
}


function Landing() {
    return (
      <LandingBody />
    );
  }
  
  export default Landing;
  