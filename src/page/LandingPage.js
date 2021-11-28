import React from 'react';
import List from '../components/List';

const LandingPage = () => {
    const [cocktails, setCocktails] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("a");

//empty array as second array make to run useEffect only ones when component mounts
React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
                );
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                      } = item;
                      return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                      };
                    });
                    setCocktails(newCocktails);
                  } else {
                    setCocktails([]);
                  }
                } catch (error) {
                  console.log(error);
                }
                setLoading(false);
              }
              getDrinks();
            }, [searchTerm]);
            return (
              <main>
                <List loading={loading} cocktails={cocktails} />
              </main>
            );
          }
          

export default LandingPage;