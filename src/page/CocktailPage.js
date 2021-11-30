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
          } = data.drinks[0];

          const newCocktail = {
            name
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
      name
    } = cocktail;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}
