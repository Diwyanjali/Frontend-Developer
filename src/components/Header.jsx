import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/images/header_logo.png'
import phoneIcon from '../assets/images/phone_icon.png'
import mailIcon from '../assets/images/mail_icon.png'
import headerIcon01 from '../assets/images/headerIcon01.png'
import headerIcon02 from '../assets/images/headerIcon02.png'
import headerIcon03 from '../assets/images/headerIcon03.png'
import headerIcon04 from '../assets/images/headerIcon04.png'
import '../pages/HomePageStyle.css'


function Header() {


  const [menuOpen, setMenuOpen] = useState(false);
  const viewMenu = {
    backgroundColor: "#000",
    marginBottom: "100%",
    transition: "background 1s ease",
  };
  const addColor = {
    backgroundColor: "#000",
  };
  const hideColor = {};
  const hideMenu = {
    display: "none",
  };


  return (
    <>
     <div className="container-fluid navigationHeader">
       <div className="container p-3">
        <div className="row">
          <div className="col-6 p-0">
            <div className="d-flex justify-content-start align-items-center headerInfo">
              <div className="d-flex justify-content-center align-items-center">
                <img src={phoneIcon} alt="" className="header_icon" />
                <p className="m-0 headerText">+91 7997 011 011</p>
              </div>
              <p className="m-0 px-3 headerText">|</p>
              <div  className="d-flex justify-content-center align-items-center">
                <img src={mailIcon} alt=""  className="header_icon"/>
                <p className="m-0 headerText">support@bullseye.com</p>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="d-flex justify-content-end align-items-center">
              <div className="px-2"><img src={headerIcon01} alt="" /></div>
              <div className="px-2"><img src={headerIcon02} alt="" /></div>
              <div className="px-2"><img src={headerIcon03} alt="" /></div>
              <div className="px-2"><img src={headerIcon04} alt="" /></div>
            </div>

          </div>
        </div>
       </div>
     </div>
      <nav
        className="navbar navbar-expand-lg navbar-light mt-5"
        style={menuOpen ? addColor : hideColor}
      >
        <div className="container-fluid  px-0" >
          <a className="navbar-logo" href="#">
            <img src={logo} className="main-logo" alt="" />
          </a>

          <div
            className="d-sm-block d-md-block d-lg-none menu"
           
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#7E1416" }} />
          </div>
          <div
            className="navbar-collapse"
            id="navbarNav"
            style={menuOpen ? viewMenu : hideMenu}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Industries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                Contact&nbsp;us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Resources
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Header;
