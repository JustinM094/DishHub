export const getRecipes = () => {
  return fetch("http://localhost:8088/Recipes").then((res) => res.json());
};

export const getRecipeById = (id) => {
  return fetch(`http://localhost:8088/Recipes/${id}`).then((res) => res.json());
};
