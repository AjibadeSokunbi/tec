import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { MdOutlineNaturePeople } from "react-icons/md";

const CarItem = (props) => {
  const { imgUrl, time, carName,  price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img style={{borderRadius: "7px"}} src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4  className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            N{price} <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-center mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
            <MdOutlineNaturePeople/> {time}
            </span>
           
          </div>


          <Link to={`/cars/${carName}`}>
          <button  className=" w-100 car__item-btn car__btn-rent" style={{backgroundColor: "#0D2851", borderRadius: "5px" , color: 'white'}}>
            Book Now!
          </button>
          </Link>

        </div>
      </div>
    </Col>
  );
};

export default CarItem;
