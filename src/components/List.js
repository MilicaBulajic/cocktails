import React from 'react';
import Cocktail from './Cocktail';

const List = ({ cocktails, loading }) => {

    if (loading) {
        return <p>Loading ...</p>
    }
    if (cocktails.length < 1) {
        return (
            <p>
                there are no cocktail under this name
            </p>
        );
    }
    return (
        <div className="cocktails">
            {cocktails.map((item) => {
                return <Cocktail key={item.id} {...item} />
            })}
        </div>
    );
};

export default List;