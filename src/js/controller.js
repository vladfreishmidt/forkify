import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import renderSpinner from '../utils/renderSpinner';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function() {
  try {

    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  }

  catch (err) {
    console.log(err);
  }
}

const eventsToRenderRecipeOn = ['load', 'hashchange'];
eventsToRenderRecipeOn.forEach(ev => window.addEventListener(ev, controlRecipes));





