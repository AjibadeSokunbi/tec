import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";



const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col  sm="12">
            <h2 className="section__title become__driver-title">
              A good work enviroment increases productivity and Improves growth mindset, book a space today!
            </h2>

            <button className="btn become__driver-btn mt-4">
              Book a Space
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
