import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`);
    
        const { recipe } = data.data;

        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          sourceUrl: recipe.source_url,
          ingredients: recipe.ingredients,
          publisher: recipe.publisher,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time
        }
    
        console.log(state.recipe);
    } catch (err) {
        // Temp error handling
        console.error(`${err} 💥💥💥💥`);
    }
};
