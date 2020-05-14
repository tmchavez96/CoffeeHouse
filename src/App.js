import React from "react";

import './App.css';
import LandingPage from './LandingPage';
import HomePage from './home'
import { Spring, config } from 'react-spring/renderprops'


class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onLanding: true,
    }
  }

  clickHandler() {
    console.log("state is false")
    this.setState({ onLanding: false })
  }

  render() {
    console.log("rendering..")
    const pageNav = this.state.onLanding;
    const alwaysBlue = true;
    const gavinBelson = false;
    if(pageNav === false){
      return (
        <div>
          <Spring
            config={{duration : 800}}
            from={{ 
              position: "absolute",
              top: "0%",
              bottom:"0%",
              left: "0%",
              right: "0%",
              overflow: "hidden",
              borderRadius: "0px",
              }
            }
            to={{ top: "50%",
            bottom:"50%",
            left: "50%",
            right: "50%",
            borderRadius: "500px"
             }}>
            {props => 
              <div style={props}>
                <LandingPage onClick={()=>this.clickHandler()}
                   value={false}
                />
              </div>
            }
          </Spring>
  
          < HomePage />
        </div >
      )
    } else {
      return (
        <div>
          <div style={{ 
              position: "absolute",
              top: 0,
              bottom:"0%",
              left: 0,
              right: 0,
              }}>
            
            <LandingPage  onClick={()=>this.clickHandler()}
            value={true}
            />
          </div>
        </div >
    )
    }
  }
}

function App() {
  return (
    <MainPage />
  );
}

export default App;
