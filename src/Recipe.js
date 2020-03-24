import React from 'react';


const Recipe = ({name, instructions, image, strIngredient2, strIngredient3 }) => {
    return (
        <div>
            <h1>{name}</h1>
            <ul>{`${strIngredient2}, ${strIngredient3}`}</ul>
            <p>{instructions}</p>
            <img src={image} alt='enjoy' />
        </div>
    );
};

export default Recipe;


