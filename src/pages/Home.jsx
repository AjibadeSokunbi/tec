import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";


import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4" style={{paddingLeft: '0px'}}>
                <div className="find__cars-left">
                  <h2>Book Now</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="borderline" style={{paddingTop: "50px", borderBottom: "5px solid #3EA64C", width: "9%"}} ></div>
            <h2 style={{color: "#0D2851"}} className="section__title">Offices that suits your needs</h2>
              <h6  style={{ color: "grey"}} className="section__subtitle">Whether you are an established business, emerging startup, budding entrepreneur or freelancer, we have the right space for your to maximise productivity and get the results you desire.</h6>
              
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className=" mb-5">
            <div className="borderline" style={{ borderBottom: "5px solid #3EA64C", width: "9%"}} ></div>
               <h2 style={{ color: "#0D2851", }}  className="section__title">Plans that suits your needs</h2>
              <h6  style={{ color: "grey"}}  className="section__subtitle">Whether you are an established business, emerging startup, budding entrepreneur or freelancer, we have the right space for your to maximise productivity and get the results you desire.</h6>
             
            </Col>

            {carData.slice(0, 9).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 ">
            <div className="borderline" style={{ borderBottom: "5px solid #3EA64C", width: "5%"}} ></div>
              <div style={{ color: "#0D2851" }} className="section__title">Our Blog</div>
              <h6 style={{ color: "grey"}} className="section__subtitle">Whether you are an established business, emerging startup, budding entrepreneur or freelancer, we have the right space for your to maximise productivity and get the results you desire.</h6>
              
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
