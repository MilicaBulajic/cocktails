import React from 'react';

export default function CocktailCard = ({name, image }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt='enjoy' />
        </div>
    );
};



