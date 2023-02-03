import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-5">Find the Best <br/>  Place for Work</h1>
            <h4 className="text-light mb-4">Find a workplace that is comfortable and suits <br/> your needs in the nearest locations</h4>
            

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-5">Find the Best <br/>  Place for Work</h1>
            <h4 className="text-light mb-4">Find a workplace that is comfortable and suits <br/> your needs in the nearest locations</h4>
            

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-5">Find the Best <br/>  Place for Work</h1>
            <h4 className="text-light mb-4">Find a workplace that is comfortable and suits <br/> your needs in the nearest locations</h4>
            

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-5">Find the Best <br/> Place for Work</h1>
            <h4 className="text-light mb-4">Find a workplace that is comfortable and suits <br/> your needs in the nearest locations</h4>
            

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
