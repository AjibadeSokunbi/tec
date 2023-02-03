import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offerr.jpg";
import { MdOutlineSignalWifiStatusbar4Bar } from 'react-icons/md';

import { ImPowerCord } from 'react-icons/im';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { FaCarAlt } from 'react-icons/fa';
import { SlCup } from 'react-icons/sl';
import { GiPoliceOfficerHead } from 'react-icons/gi';





const AboutSection = ({ aboutClass }) => {
  return (
    <section 
      className="about__section">
      <Container>
        <Row>
        <Col lg="6" md="6" >
            <div className="about__img">
            
            </div>
              <img  src={aboutImg} alt="" style={{width: "40%"}} className="about__imgg" />
          </Col>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h1 className="section__subtitl">About Us</h1>

              <p className="section__description">
            
             
              We are a tech-centric coworking community-based in the heart of Lagos Nigeria providing services that enable SMEs and startups to thrive. We not only provide a co-working space but also an environment that enables creativity, networking, and productivity through our various service offerings and activities.
<div className="space"></div>
<br/>

At TecHub Spaces, we believe work is important, but the right community and environment are more important. That is why at TecHub spaces, we are fostering a community of diverse yet like-minded individuals, bound together with the best work culture that is super fun, and exciting.
              </p>
           
            </div>
            
          </Col>
          <div className="ameniti">
          <div className="amenitie">
            <div className="amenities"><MdOutlineSignalWifiStatusbar4Bar  /> <div  style={{fontSize: "0.8rem", color: "black", }}>High Internet Speed</div></div> 
            <div className="amenities"><ImPowerCord />  <div style={{fontSize: "0.8rem", color: "black"}}>Constant Power</div></div>
            <div className="amenities"><TbToolsKitchen2/>  <div style={{fontSize: "0.8rem", color: "black"}}>Kitchennet</div></div> 
            <div className="amenities"><FaCarAlt/>  <div style={{fontSize: "0.8rem", color: "black"}}>Parking Space</div></div> 
            <div className="amenities"><SlCup/>  <div style={{fontSize: "0.8rem", color: "black"}}>Coffee</div></div> 
            <div className="amenities"><GiPoliceOfficerHead/>  <div style={{fontSize: "0.8rem", color: "black"}}>Security</div></div>  
         </div>
        </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
