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
          <h5>{glass}</h5>
          <h6>{info}</h6>
          <Link to={`/cocktail/${id}`} className="button">
            Read more
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Cocktail;
