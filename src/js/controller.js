const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const api = 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886';
const apiKey = '6735a6ac-f85d-43b4-9ff1-7b2523b71963';

const searchTerm = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'

const showRecipe = async function() {
  try {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      imageUrl: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time
    }

    console.log(recipe);
  }

  catch (err) {
    console.log(err);
  }
}

showRecipe();

