import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './home.css';
import { BsList } from 'react-icons/bs';

import bellLogo from "./assets/images/bellLogoTrans.png";

import { CSSTransition } from 'react-transition-group';

//sub pages
import HomeComponent from './subPages/homeComponent'
import MenuComponent from './subPages/menu'
import ContactComponent from './subPages/contact'

function NavItem(props) {
  if(props.name == props.selected){
    return (
      <div className="mainNavElmSelected">
      <Link className="mainNavLink" to={props.link}><div className="hoverText">{props.name} </div></Link>
    </div>
    )
  }else{
    return (
      <div className="mainNavElm">
      <Link className="mainNavLink" to={props.link}><div className="hoverText">{props.name} </div></Link>
    </div>
    )
  }
}

function Navigation() {
  const [selected, setSelected] = useState("home");
  var currentPage = "home"
  return (
    <div className="mainNavBar">
      <CSSTransition in={selected == "home"}
        timeout={500}
        classNames="main-nav-elm">
        <div className="mainNavElm" onClick={() => setSelected("home")}>
          <Link className="mainNavLink" to="/"><div className="hoverText">Home </div></Link>
        </div>
      </CSSTransition>
      <CSSTransition in={selected == "menu"}
        timeout={500}
        classNames="main-nav-elm">
        <div className="mainNavElm" onClick={() => setSelected("menu")}>
          <Link className="mainNavLink" to="/menu"><div className="hoverText">Menu </div></Link>
        </div>
      </CSSTransition>
      <CSSTransition in={selected == "contact"}
        timeout={500}
        classNames="main-nav-elm">
        <div className="mainNavElm" onClick={() => setSelected("contact")}>
          <Link className="mainNavLink" to="/contact"><div className="hoverText"> Contact </div></Link>
        </div>
      </CSSTransition>
    </div>
  )
}

function Navigation2() {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="mainNavBar">
      <div onClick={() => setSelected("Home")}>
        <NavItem name="Home" selected={selected} link="/" onClick={() => setSelected("Home")}/>
      </div>
      <div onClick={() => setSelected("Menu")}>
      <NavItem name="Menu" selected={selected} link="/menu" onClick={() => setSelected("Menu")}/> 
      </div>
      <div onClick={() => setSelected("Contact")}>
        <NavItem name="Contact" selected={selected} link="/contact" onClick={() => setSelected("Conact")}/>
      </div>
    </div>
  )
}


function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <Router>

      <div className="home-page-body">
        <div className="homePageHeader">
          <img src={bellLogo} width="100px" height="100px" />
          <div className="hamburgerButton" onClick={() => setOpen(!open)}>
            <BsList />
          </div>

        </div>
        <div className="navContainer">
          <CSSTransition in={open}
            unmountOnExit
            timeout={500}
            classNames="menu-primary">
            <div className="menu">
              <Navigation2 />
            </div>
          </CSSTransition>
        </div>
        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <div className="nav-page-cont">
          <Switch >
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route path="/menu">
              <MenuComponent />
            </Route>
            <Route path="/contact">
              <ContactComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default HomePage;