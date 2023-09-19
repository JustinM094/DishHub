import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../Services/RecipeService";
import "./RecipeDetails.css";

export const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeById(recipeId).then((recipeObj) => {
      setRecipeDetails(recipeObj);
    });
  }, [recipeId]);

  return (
    <div>
      <article className="recipe-container">
        <section className="recipe-card" key={recipeDetails.id}>
          <header className="recipe-title">{recipeDetails.title}</header>
          <img
            className="recipe-image"
            src={recipeDetails.picture}
            alt={recipeDetails.title}
          />
          <p className="recipe-description">{recipeDetails.description}</p>
          <div className="recipe-ingredients">
            <h3>Ingredients:</h3>
            <p>{recipeDetails.ingredients}</p>
          </div>
          <div className="recipe-instructions">
            <h3>Instructions:</h3>
            <p>{recipeDetails.instructions}</p>
          </div>
        </section>
      </article>
    </div>
  );
};
