import React from "react";
import footerLogo from "../assets/images/footerLogo.png";
import facebookLogo from "../assets/images/facebook.png";
import instagramLogo from "../assets/images/instagram.png";
import twitterLogo from "../assets/images/twitter.png";
import linkedinLogo from "../assets/images/linkedin.png";
import mailLogo from "../assets/images/mail.png";
import btmLogo from "../assets/images/LOGO.png";

function Footer() {
  const footerSec = {
    backgroundColor :'#000',
    color:'#fff',
    
    
  }
  const aboutTitle = {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "21.79px",
    marginTop: "35px",
    
  };
  const aboutDes = {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21.79px",
    
  };
  const secTitle = {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27.24px",
    
    marginTop: "15px",
  };
  const submitSecTitle = {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27.24px",
  };
  const linksInfo = {
    listStyle: "none",
    
  };
  const linkList = {
    marginBottom: "15px",
  };
  const link = {
    textDecoration: "none",
    color:'#fff',
  };
  const submitSec = {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21.24px",
  };
  const inputFieldSec = {
    position: "relative",
  };
  const inputField = {
    border: "none",
    backgroundColor: "#fff",
    borderRadius: "4px",
    width: "100%",
    height: "52px",
    
  };
  const btn = {
    position: "absolute",
    right: "1.5%",
    top: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(-50%)",
    
    borderRadius: "2px",
    backgroundColor: "#000",
    border:'none',
    
  };
  const btnText = {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "19.07px",
    color:'#fff',
    margin:'0',
  };
  const middleTitle = {
    marginRight:'85px',
  }
  const iconSec = {
   display:'inline-flex',
  //  paddingLeft:'45px',
  //  paddingBottom:'20px',
   flexDirection:'column',
   alignItems:'center',
  }
  const icons = {
   width:'165px',
   padding:'0',
   margin:'0', 
   listStyle:'none',
   display:'flex',
   justifyContent:'space-between',
  }
  const icon = {
   paddingLeft:'10px',
  }
  const footerLogoStyle = {};
  const btmLogoStyle = {
  //  marginLeft:'18px',
  }
  return (
    <>
    <div className="container-fluid" style={footerSec}>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 p-sm-2 p-md-0 p-lg-0">
          <div style={footerLogoStyle}>
            <img src={footerLogo} alt="" />
          </div>
          <div>
            <p style={aboutTitle}>About us</p>
            <p style={aboutDes}>
              Lorem ipsum dolor sit amet consectetur. Est sollicitudin placerat
              nec tellus facilisis a fusce nunc. Consequat suspendisse eleifend
              sit ipsum scelerisque sollicitudin at sed.{" "}
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 px-sm-0 px-md-5 px-lg-5">
          <div className="">
            <p style={secTitle} className="secTitle">
              QUICK LINKS
            </p>
            <ul style={linksInfo} className="linksInfo">
              <li style={linkList}>
                <a href="" style={link}>
                  Home
                </a>
              </li>
              <li style={linkList}>
                <a href="" style={link}>
                  Services
                </a>
              </li>
              <li style={linkList}>
                <a href="" style={link}>
                  About us
                </a>
              </li>
              <li style={linkList}>
                <a href="" style={link}>
                  Blogs
                </a>
              </li>
              <li style={linkList}>
                <a href="" style={link}>
                  Projects
                </a>
              </li>
              <li style={linkList}>
                <a href="" style={link}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-2 px-md-0 px-lg-0">
          <div className="">
            <p style={submitSecTitle}>SUBMIT NEWSLETTER</p>
            <p style={submitSec}>
              Lorem ipsum dolor sit amet consectetur. Est sollicitudin placerat
              nec tellus facilisis a fusce nunc. Consequat suspendisse eleifend
              sit ipsum scelerisque sollicitudin.
            </p>
            <div style={inputFieldSec} className="mt-5">
              <input type="text" style={inputField} />
              <button style={btn} className="btn">
                <p style={btnText}>SUBMIT</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container d-flex justify-content-center mt-4">
        <div className="row">
          <div className="col border">
            <div  style={middleTitle}>
              <p className="m-0">Follow us on :</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex  align-items-center p-md-0 p-lg-0">
          <div>
            <p className="m-0">&copy; All rights reserved by Bullseye </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex  align-items-center">
          <div style={iconSec} className="iconSec">
            
            <div className="">
              <ul style={icons}>
                <li>
                  <a href="" style={icon}>
                    <img src={facebookLogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" style={icon}>
                    <img src={instagramLogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" style={icon}>
                    <img src={twitterLogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" style={icon}>
                    <img src={linkedinLogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" style={icon}>
                    <img src={mailLogo} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 p-0">
          <div className="d-flex  align-items-center justify-content-between ">
            <p className="m-0 companyText">Designed and developed by</p>
            <div style={btmLogoStyle}>
              <img src={btmLogo} alt="" className="btmLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Footer;
