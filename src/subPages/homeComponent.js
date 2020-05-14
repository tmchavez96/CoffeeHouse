import React from "react";
//import router?
import './homeComponent.css';

import {
    Link
} from "react-router-dom"

function HomeComponent() {
    return (
        <div className="home-comp-body">
            <div className="home-comp-covid">
                <div className="home-comp-covid-message">
                    We are open  during covid! <br></br>
                    Come get some air and fresh coffee!
                </div>
            </div>
            <div className="home-comp-intro">
                <h3 className="home-comp-header">
                    Experience <br></br>
                    WORLD CLASS COFFEE
                </h3>

                <h3 >
                    We serve a variety of hand-crafted <br></br>
                    coffe and tea beverages made fresh for you
                </h3>
                <div className="home-comp-menu-link">
                    <Link className="home-comp-menu-link-text" to="/menu">Menu</Link>
                </div>
            </div>
        </div>
    )
}


export default HomeComponent;