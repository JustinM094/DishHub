import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/CategoryService";
import { editRecipe, getRecipeById } from "../../Services/RecipeService";
import "../../App.css";

export const EditRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    picture: "",
    description: "",
    ingredients: "",
    instructions: "",
    categoryId: 0,
  });
  const [categories, setCategories] = useState([]);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById(recipeId).then((recipeData) => {
      setRecipe(recipeData);
    });
    getCategory().then((catArray) => {
      setCategories(catArray);
    });
  }, [recipeId]);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    const loggedInUserId = JSON.parse(localStorage.getItem("dishhub_user"));

    if (!loggedInUserId || !loggedInUserId.id) {
      return;
    }

    const updatedRecipe = {
      title: recipe.title,
      picture: recipe.picture,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      categoryId: recipe.categoryId,
      userId: parseInt(loggedInUserId.id),
    };

    editRecipe(recipeId, updatedRecipe).then(() => {
      navigate(`/recipes/${recipeId}`);
    });
  };

  return (
    <form className="add-recipe-form">
      <header>
        <h1>Edit Recipe</h1>
      </header>
      <fieldset>
        <h2>Recipe Name</h2>
        <div>
          <input
            name="title"
            placeholder="recipe title"
            value={recipe.title}
            type="text"
            onChange={handleEditChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Add Picture</h2>
        <div>
          <input
            name="picture"
            placeholder="recipe image"
            type="text"
            value={recipe.picture}
            onChange={handleEditChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Description</h2>
        <div>
          <input
            name="description"
            placeholder="recipe description"
            type="text"
            value={recipe.description}
            onChange={handleEditChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Ingredients</h2>
        <div>
          <input
            name="ingredients"
            placeholder="recipe ingredients"
            type="text"
            value={recipe.ingredients}
            onChange={handleEditChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Instructions</h2>
        <div>
          <input
            name="instructions"
            placeholder="recipe instructions"
            type="text"
            value={recipe.instructions}
            onChange={handleEditChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Category</h2>
        <select
          name="categoryId"
          onChange={handleEditChange}
          value={recipe.categoryId}
        >
          <option value={0}>Please select a category</option>
          {categories.map((catObj) => {
            return (
              <option key={catObj.id} value={catObj.id}>
                {catObj.mealType}
              </option>
            );
          })}
        </select>
      </fieldset>
      <button className="btn" onClick={handleSave}>
        Merge
      </button>
    </form>
  );
};
