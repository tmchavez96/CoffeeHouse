import React from "react";
import './LandingPage.css';
import logo from "./assets/images/BCHblack.png";
//import { Spring } from 'react-spring/renderprops';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leaving: props.value,
        }
    }

    render() {
        console.log("leaving state was -- " + this.state.leaving )
       if(this.state.leaving){
        return (
            <div className="landingBody"
                onClick={() => this.props.onClick()}
            >
                <div className="landingTextWhite">
                    <h1 className="landingTextWhiteText">
                        Welcome To
                            </h1>
                    <h1 className="landingTextWhiteText">
                        Bellaria Coffee House
                            </h1>
                    <img src={logo} className="logo" alt="logo"/>
                    <div className="desktopText clickMe">
                        Click anywhere to Enter
                            </div>
                    <div className="mobileText clickMe">
                        Tap anywhere to Enter
                            </div>
                </div>
            </div>
        ) 
       }else{
        return (
            <div className="landingBody"
                onClick={() => this.props.onClick()}
            >
            </div>
        ) 
       }
    }
}

export default LandingPage;
