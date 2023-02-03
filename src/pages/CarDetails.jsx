import React, { useEffect } from "react";
import { BsFillBookmarkCheckFill } from 'react-icons/bs'

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";


const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    N{singleCarItem.price}
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=""
                  style={{ columnGap: "1rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <BsFillBookmarkCheckFill/>
                    {singleCarItem.time}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    {singleCarItem.automatic ? <BsFillBookmarkCheckFill/> : ''}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                   <BsFillBookmarkCheckFill/>
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=""
                  style={{ columnGap: "1rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
<BsFillBookmarkCheckFill/>
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                  <BsFillBookmarkCheckFill/>
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    {singleCarItem.brand ? <BsFillBookmarkCheckFill/> : ''}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
