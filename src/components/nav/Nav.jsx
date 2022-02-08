import React from "react";
import "./Nav.scss";
import instagram from "../../assets/images/logo.png"
import home from "../../assets/images/home.png";
import send from "../../assets/images/send.png";
import plus from "../../assets/images/more.png";
import compass from "../../assets/images/compass.png";
import heart from "../../assets/images/heart.png";
import profile from "../../assets/images/profile.png";

const Nav = () => {

  return (

  <nav className="nav">
  <img src= {instagram} className="nav__icon nav__logo"/>
  <img src= {home} className="nav__icon"/>
  <img src= {send} className="nav__icon"/>
  <img src= {plus} className="nav__icon"/>
  <img src= {compass} className="nav__icon"/>
  <img src= {heart} className="nav__icon"/>
  <img src= {profile} className="nav__icon"/>


  
  </nav>
  )


}

export default Nav;