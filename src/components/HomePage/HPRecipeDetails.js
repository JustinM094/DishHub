import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../Services/RecipeService";
import "../../App.css";

export const DisplayHomeRecipeDetails = () => {
  const [allRecipeDetails, setAllRecipeDetails] = useState({});
  const { homeRecipeId } = useParams();

  useEffect(() => {
    getRecipeById(homeRecipeId).then((recipeObj) => {
      setAllRecipeDetails(recipeObj);
    });
  }, [homeRecipeId]);

  return (
    <div>
      <article className="recipe-details-container">
        <section className="recipe-details-card" key={allRecipeDetails.id}>
          <header className="recipe-details-title">
            {allRecipeDetails.title}
          </header>
          <p className="recipe-details-description">
            {allRecipeDetails.categoryId
              ? allRecipeDetails.category.mealType
              : "N/A"}
          </p>
          <img
            className="recipe-details-image"
            src={allRecipeDetails.picture}
            alt={allRecipeDetails.title}
          />
          <div className="recipe-details-description">
            <h3>Description:</h3>
            {allRecipeDetails.description}
          </div>
          <div className="recipe-details-ingredients">
            <h3>Ingredients:</h3>
            <p>{allRecipeDetails.ingredients}</p>
          </div>
          <div className="recipe-details-instructions">
            <h3>Instructions:</h3>
            <p>{allRecipeDetails.instructions}</p>
          </div>
        </section>
      </article>
    </div>
  );
};
