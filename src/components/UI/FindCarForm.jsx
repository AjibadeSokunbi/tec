import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">


        <FormGroup className="form__group">
          <input type="date" placeholder="Duration" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder=""
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Walk in</option>
            <option value="non-ac">Premium Plans</option>
            <option value="non-ac">Private Office</option>
            <option value="non-ac">Virtual Office Plans</option>
          </select>
        </FormGroup>

       
      </div>
      <FormGroup className="">
          <div className="form_btn ">
                    <button className="btn find__car-btn">Book Space</button>
          </div>

        </FormGroup>
    </Form>
  );
};

export default FindCarForm;
