import { useEffect, useState } from "react";
import { postRecipes } from "../../Services/RecipeService";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/CategoryService";

export const NewRecipeForm = () => {
  const [categories, setCategories] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    picture: "",
    description: "",
    ingredients: "",
    instructions: "",
    categoryId: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    getCategory().then((catArray) => {
      setCategories(catArray);
      console.log("categories set!");
    });
  }, []);

  const handleInputChange = (event) => {
    const itemCopy = { ...newRecipe };
    itemCopy[event.target.name] = event.target.value;
    setNewRecipe(itemCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const loggedInUserId = JSON.parse(localStorage.getItem("dishhub_user"));

    if (!loggedInUserId || !loggedInUserId.id) {
      return;
    }

    const newRecipeItem = {
      title: newRecipe.title,
      picture: newRecipe.picture,
      description: newRecipe.description,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions,
      categoryId: parseInt(newRecipe.categoryId),
      userId: parseInt(loggedInUserId.id),
    };

    postRecipes(newRecipeItem).then(() => {
      navigate("/recipes");
    });
  };

  return (
    <form className="add-recipe-form">
      <header>
        <h1>Add Recipe</h1>
      </header>
      <fieldset>
        <h2>Recipe Name</h2>
        <div>
          <input
            name="title"
            placeholder="recipe title"
            value={newRecipe.title}
            type="text"
            onChange={handleInputChange}
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
            value={newRecipe.picture}
            onChange={handleInputChange}
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
            value={newRecipe.description}
            onChange={handleInputChange}
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
            value={newRecipe.ingredients}
            onChange={handleInputChange}
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
            value={newRecipe.instructions}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <h2>Category</h2>
        <select
          name="categoryId"
          onChange={handleInputChange}
          value={newRecipe.categoryId}
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
        Dish Commit
      </button>
    </form>
  );
};
