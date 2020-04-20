import React from 'react';
import { Link } from 'react-router-dom'
import CocktailCard from './CocktailCard'


const CocktailsList = ({ cocktails }) => {
    const createCard = (cocktail, index) => (
        <Link to={`/cocktail/${cocktail.id}`} key={index}>
            <CocktailCard cocktail={cocktail} />
        </Link>
    )

    const gridCard = cocktails.map(createCard);

    return (
        <div>
            {gridCard}
        </div>
    );
};

export default CocktailsList;