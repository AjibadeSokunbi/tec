import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { BsCheck2All } from 'react-icons/bs';


const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col  lg="4" md="4" sm="6" className="mb-3 " >
    <div className="service__item service-work">
      <span className="mb-3 d-inline-block">
      <img src={item.imgUrl} alt="" className="w-100 service-image" />
      </span>

      <h6 style={{color: '#3EA64C'}}>{item.title}</h6>
      
      <p  className="section__descriptio">{item.desc}</p>
    <p className="section__descripti">Features</p>
    <div className="section__descript"><BsCheck2All/> {item.feature1}</div>
    <div className="section__descript"><BsCheck2All/> {item.feature2}</div>
    <div className="section__descript"><BsCheck2All/> {item.feature3}</div>
    <div className="section__descript"><BsCheck2All/> {item.feature4}</div>
    </div>
  </Col>
);

export default ServicesList;
