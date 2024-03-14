import React from "react";
import mainImg from "../assets/images/front-view-young-beautiful-lady.png";
import frame from "../assets/images/Frame.png";

// solution card images
import cardImg from '../assets/images/businessman-dictating-notes-his-colleague-office.png'



// contact us section images
import img01 from '../assets/images/Rectangle36.png'
import img02 from '../assets/images/Rectangle37.png'
import img03 from '../assets/images/Rectangle38.png'

// products section images
import productImg01 from '../assets/images/innerImg01.png'
import productImg02 from '../assets/images/innerImg02.png'
import productImg03 from '../assets/images/innerImg03.png'

// Industries section images
import IndustriesImg01 from '../assets/images/industriesIcon01.png'

import './HomePageStyle.css'

function HomePage() {
  // solution section data
  const solutionData = [
    {
      id: 'card01',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card02',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card03',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card04',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card05',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card06',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card07',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card08',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card09',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    },
    {
      id: 'card10',
      backgroundImg:cardImg,
      text:'Vendor Due Diligence',

    }

  ]

 

   // industries section data
   const industriesData = [
    {
      id: 'card01',
      iconImg:IndustriesImg01,
      text:'Education',

    },
    {
      id: 'card02',
      iconImg:IndustriesImg01,
      text:'Education',

    },
    {
      id: 'card03',
      iconImg:IndustriesImg01,
      text:'Education',

    },
    {
      id: 'card04',
      iconImg:IndustriesImg01,
      text:'Education',
    },
    {
      id: 'card05',
    iconImg:IndustriesImg01,
    text:'Education',

    },
    {
      id: 'card06',
      iconImg:IndustriesImg01,
      text:'Education',
    },
    {
      id: 'card07',
      iconImg:IndustriesImg01,
      text:'Education',
    },
    {
      id: 'card08',
      iconImg:IndustriesImg01,
      text:'Education',

    },
    {
      id: 'card10',
      iconImg:IndustriesImg01,
      text:'Education',

    },
    {
      id: 'card11',
      iconImg:IndustriesImg01,
      text:'Education',
    }

  ]
  const heroSection = {
    marginTop:'120px',
    height: "80.6vh",
    position: "relative",
    backgroundColor:'#7E1416'
  };
  const imgSec = {
    paddingTop: "60px",
  };
  const mainImgStyle = {
    maxWidth: "80%",
  };
  const frameStyle = {
    position: "absolute",
    maxWidth: "30%",
    top: "0",
    left: "0",
  };
  const card = {
    width:'267px',
    height:'305px',
    borderRadius:'30px',
    position:'relative',

  };
  const firstInnerSec = {
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
   justifyContent:'center',
   
  }
  const secondInnerSec = {
    display:'flex',
   flexDirection:'column',
   alignItems:'center',
   justifyContent:'center',
  }
  

  // ***************
 
 const contactUsFormInputField = {
  width:'100%',
  height:'20%',
  borderRadius: '10px',
  backgroundColor:'#FFEAEB',
  marginBottom:'25px',
  border:'none',
  
 }
 const labelText = {
  fontWeight:'600',
  fontSize:'18px',
  lineHeight:'24.51px',
  color:'#7E1416',
  marginBottom:'10px',
  

}

const  submitBtn = {
 width:'82px',
 height:'40px',
 borderRadius:'6px',
 padding:'10px',
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#7E1416',
 }
 const  submitBtnText = {
  color:'#fff',
  margin:'0',
 }

 
  return (
    <>
      {/* hero section */}
      <div className="container-fluid my-5" style={heroSection}>
        <div className="row">
          <div className="col-sm-12 col-md- col-lg-6 p-0">
            <div
              className="img-sec d-flex justify-content-start align-items-end"
              style={imgSec}
            >
              <img src={mainImg} alt="" style={mainImgStyle} />
              <img src={frame} alt="" style={frameStyle} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 infoSec">
            <div className="">
              <div className="header-title">
                Bull's Eye Outsourcing - Outsourcing <br /> Solutions, Right on
                Target
              </div>

              <div className="d-flex justify-content-start">
                <div className="radioBtnSec">
                  <p className="m-0 radioBtnText">VISSION</p>
                  <div className="radio-btn"><input type="radio" className="radioBtn" checked/></div>
                </div>
                <hr  className="line"/>
                <div className="radioBtnSec">
                  <p className="m-0 radioBtnText">MISSION</p>
                  <div className="radio-btn"><input type="radio" className="radioBtn" checked/></div>
                </div>
                <hr  className="line"/>
                <div className="radioBtnSec">
                  <p className="m-0 radioBtnText">ABOUT US</p>
                  <div className="radio-btn"><input type="radio" className="radioBtn" checked/></div>
                </div>
              </div>
              <div>
                <p className="des">
                  Empowering Trust through Diligent Verification: Our mission is
                  to provide reliable, comprehensive, and swift background
                  verification services across the globe. Committed to upholding
                  integrity, accuracy and confidentiality, we aim to ensure the
                  confidence and security of our clients by delivering thorough
                  and ethical verification solutions tailored to their specific
                  needs.
                </p>
                <p className="des">
                  By leveraging technology, expertise and a customer-centric
                  approach, we strive to be the foremost partner in enabling
                  informed decisions and fostering a safer, more trustworthy
                  environment for businesses and individuals alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
            {/* solution section */}
            
            <div className="container secSolution">
        <div className="row gap-4 d-flex justify-content-center">
        <div className="container solutionTitle">
         <p className="mainTitle px-2">{'{ Solutions }'}</p>
          </div>
          {solutionData.map(({id,backgroundImg,text})=>(
             <div
             key={id}
             className="col-3 singleCard"
             style={{

               backgroundImage: `url(${backgroundImg})`,
             }}
           >
            <p className="cardText">{text}</p>
           </div>
          ))}
       
        </div>
      </div>

      {/* Products section */}
      <div className="container d-flex justify-content-center">
         <p className="mainTitle px-2 mt-5">{'{ Products}'}</p>
          </div>
      <div className="container-fluid p-0 mt-5">
        <div className="col-12 p-3 d-flex justify-content-center align-items-center productsInnerSec" style={{backgroundImage:`url(${productImg01})`}}>
          {/* <img src={productImg01}  alt="" className="productsInnerSecImage"/> */}
          <p className="productsInnerSecText">BEST</p>
        </div>
        <div className="col-12 p-3 d-flex justify-content-center align-items-center productsInnerSec" style={{backgroundImage:`url(${productImg02})`}}>
          <p className="productsInnerSecText">iSMART</p>
        </div>
        <div className="col-12 p-3 d-flex justify-content-center align-items-center productsInnerSec" style={{backgroundImage:`url(${productImg03})`}}>
          <p className="productsInnerSecText">DigiAV</p>
        </div>
      </div>


      {/* Industries section */}
      <div className="container-fluid my-5" style={{backgroundColor:'#FFEAEB'}}>

      <div className="container d-flex justify-content-center">
         <p className="mainTitle px-2 mt-5">{'{ Products}'}</p>
          </div>
        <div className="container">
          <div className="row">

          {industriesData.map(({id,iconImg,text})=>(
             <div
             key={id}
             className="col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center"
           >
            <div className="industriesCard">
                <div className="iconInfo">
                <div className="circleIcon">
                  <img src={iconImg} alt="" className="circleIconImg"/>
                </div>
                <p className="industriesText">{text}</p>
                </div>
              </div>

           </div>
          ))}

          </div>
        </div>
      </div>


       {/* Contact Us section */}
       <div className="container">
        <div className="row">
         <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
          <div className="row contactUs-image">
            <div className="col-6 m-0 p-0" style={firstInnerSec}>
                <div className="col-12 innerBox_01">

                </div>
                <div className="col-12 innerBox_02"></div>
            </div>
            <div className="col-6 m-0 px-3" style={secondInnerSec}>
                <div className="col-12 innerBox_03"></div>
                <div className="col-12 innerBox_04"></div>
                <div className="col-12 innerBox_05"></div>
            </div>
          </div>
         </div>
         <div className="col-sm-12 col-md-6 col-lg-6  contactUsForm">
         <div>
         <p className="mainTitle">{'{ contact us }'}</p>
          </div>
          <div>
            <label htmlFor="" style={labelText}>Name</label> <br />
            <input type="text" style={contactUsFormInputField}/> <br />
            <label htmlFor="" style={labelText}>Mobile Number</label> <br />
            <input type="text" style={contactUsFormInputField} /> <br />
            <label htmlFor="" style={labelText}>Email Id</label> <br />
            <input type="text" style={contactUsFormInputField}/>
            
          </div>
          <div className="submitBtnSec">
            <button style={submitBtn}><p style={submitBtnText}>Submit</p></button>
          </div>
          
         </div>
        </div>
       </div>

       
    </>
    
  );
}

export default HomePage;
