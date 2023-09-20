import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRecipe, getRecipeById } from "../../Services/RecipeService";
import "./RecipeDetails.css";

export const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById(recipeId).then((recipeObj) => {
      setRecipeDetails(recipeObj);
    });
  }, [recipeId]);

  const handleDelete = () => {
    deleteRecipe(recipeId).then(() => {
      navigate("/recipes");
    });
  };

  return (
    <div>
      <article className="recipe-details-container">
        <section className="recipe-details-card" key={recipeDetails.id}>
          <header className="recipe-details-title">
            {recipeDetails.title}
          </header>
          <p className="recipe-details-description">
            {recipeDetails.categoryId ? recipeDetails.category.mealType : "N/A"}
          </p>
          <img
            className="recipe-details-image"
            src={recipeDetails.picture}
            alt={recipeDetails.title}
          />
          <div className="recipe-details-description">
            <h3>Description:</h3>
            {recipeDetails.description}
          </div>
          <div className="recipe-details-ingredients">
            <h3>Ingredients:</h3>
            <p>{recipeDetails.ingredients}</p>
          </div>
          <div className="recipe-details-instructions">
            <h3>Instructions:</h3>
            <p>{recipeDetails.instructions}</p>
          </div>
          <div className="recipe-details-actions">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
            <button
              className="edit-button"
              onClick={() => {
                navigate(`/recipes/${recipeDetails.id}/edit`);
              }}
            >
              Edit
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};
