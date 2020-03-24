import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';


const App = () => {

  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('margarita');

  useEffect(() => {
    getCocktails();
  }, [query]);
  
  const getCocktails = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setCocktails(data.drinks);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {cocktails.map(recipe => (
        
         <Recipe 
          key={recipe.strDrink} 
          name={recipe.strDrink} 
         ingredients={recipe.strIngredient2} 
          instructions={recipe.strInstructions}
          image={recipe.strDrinkThumb}
         />
         
      ))}
    </div>
  )
}

export default App;
