import React, { useRef } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

import emailjs from "emailjs-com";

const BookingForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zn1zajo",
      "template_pynked1",
      form.current,
      "1VcT9wGERs_sscEUX"
    );
    e.target.reset();
  };
  
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" style={{}} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Booking Information"
        ></textarea>
      </FormGroup>
      <button type="submit" className=" w-100 car__item-btn car__btn-rent" style={{backgroundColor: "#0D2851", borderRadius: "5px" , color: 'white'}}>
            Book Now!
          </button>
    </Form>
  );
};

export default BookingForm;
