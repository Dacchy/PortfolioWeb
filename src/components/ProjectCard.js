import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const cardContent = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return link ? (
    <Col size={12} sm={6} md={4}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white" }}
      >
        {cardContent}
      </a>
    </Col>
  ) : (
    <Col size={12} sm={6} md={4}>
      {cardContent}
    </Col>
  );
};
