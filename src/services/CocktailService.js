
import { API } from '../shared/API'
import Cocktail from 'models/Cocktail'
import Ingredients from 'models/Ingredients'

class CocktailService {
    fetchRandomCocks() {
        const requestPath() = `/cocktails`

        const adaptCocks = cocktails => {
            return cocktails
                .map(cocktail => new Cocktail(cocktail))
                .splice(0, 22)
        }

        return API.get(requestPath).then(adaptCocks)
    }

export const CocktailService = new CocktailService()