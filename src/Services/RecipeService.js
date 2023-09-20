export const getRecipes = () => {
  return fetch(`http://localhost:8088/Recipes`).then((res) => res.json());
};

export const getRecipesByUserId = (userId) => {
  return fetch(`http://localhost:8088/Recipes?userId=${userId}`).then((res) =>
    res.json()
  );
};

export const getRecipeById = (id) => {
  return fetch(`http://localhost:8088/Recipes/${id}?_expand=category`).then(
    (res) => res.json()
  );
};

export const postRecipes = (recipe) => {
  return fetch(`http://localhost:8088/Recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
};

export const deleteRecipe = (recipeId) => {
  return fetch(`http://localhost:8088/Recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const editRecipe = (recipeId, updatedRecipe) => {
  return fetch(`http://localhost:8088/Recipes/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedRecipe),
  });
};
