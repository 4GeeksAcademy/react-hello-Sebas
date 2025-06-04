import React from "react";

const Card = ({img, title, description}) => {
  return (
    <div className="col-lg-3 col-ms-6 mb-4">
    <div className="card h-100 text-center">
      <img src={img}
      className="card-img-top"
      style={{height: "200px", objectFit: "contain"}}
      alt={title}
      />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">
          {description}
        </p>
        <a href="#" className="btn btn-primary mt-auto">
          Find Out More!
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;