import React from 'react';
import { Link } from "react-router-dom";

const Cocktail = ({ name, id, image }) => {
    return (
        <div>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <Link to={`/cocktail/${id}`}>
          view more
        </Link>
        </div>
    );
};

export default Cocktail;