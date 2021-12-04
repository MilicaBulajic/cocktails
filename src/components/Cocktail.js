import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ name, id, image, glass, info }) => {
  return (
    <div className="cocktail">
      <article>
        <div className="img">
          <img src={image} alt={name} />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <p>{glass}</p>
          <h5>{info}</h5>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            Read more
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Cocktail;
