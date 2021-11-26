import React from 'react';

const Cocktail = ({ name, id, image }) => {
    return (
        <div>
          <img src={image} alt={name} />
          <Link to={`/cocktail/${id}`}>
          view more
        </Link>
        </div>
    );
};

export default Cocktail;