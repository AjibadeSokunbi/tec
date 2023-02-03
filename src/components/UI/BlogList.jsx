import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title,  description, descriptionB } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={`${description}`} className="blog__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {descriptionB}
          </p>

          <Link style={{color: "#0D2851", borderBottom: "1px solid black"}} to={`/blogs/${title}`} className="read__more">
            Read More
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
