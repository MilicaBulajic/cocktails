import React from "react";
import { useParams, Link } from "react-router-dom";

export default function CocktailPage() {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strDrinkThumb: image,
            strGlass: glass,
            strInstructions: instructions,
            strAlcoholic: info,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            category,
            image,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <p>Loading...please wait</p>;
  }
  if (!cocktail) {
    return <p>no cocktail to display</p>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section>
        <div className="single">
          <img src={image} alt={name} />
          <div className="drink">
            <p>Name: <span>{name}</span></p>
            <p>Category: <span>{category}</span></p>
            <p>Type: <span>{info}</span></p>
            <p>Glass: <span>{glass}</span></p>
            <p>Instructions: <span>{instructions}</span></p>
            <p>
              Ingredients:{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
            <Link to="/" className="buttons">
          Back 
        </Link>
          </div>
        </div>
      </section>
    );
  }
}
