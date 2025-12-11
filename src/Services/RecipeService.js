export const getRecipes = () => {
  return fetch(`https://dishhub-api.onrender.com/Recipes`).then((res) =>
    res.json()
  );
};

export const getRecipesByUserId = (userId) => {
  return fetch(
    `https://dishhub-api.onrender.com/Recipes?userId=${userId}`
  ).then((res) => res.json());
};

export const getRecipeById = (id) => {
  return fetch(
    `https://dishhub-api.onrender.com/Recipes/${id}?_expand=category`
  ).then((res) => res.json());
};

export const postRecipes = (recipe) => {
  return fetch(`https://dishhub-api.onrender.com/Recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
};

export const deleteRecipe = (recipeId) => {
  return fetch(`https://dishhub-api.onrender.com/Recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const editRecipe = (recipeId, updatedRecipe) => {
  return fetch(`https://dishhub-api.onrender.com/Recipes/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedRecipe),
  });
};
