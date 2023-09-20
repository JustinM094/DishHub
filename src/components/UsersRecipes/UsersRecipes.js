import { useState, useEffect } from "react";
import { getRecipesByUserId } from "../../Services/RecipeService";
import "./UsersRecipes.css";
import { useNavigate } from "react-router-dom";

export const DisplayUsersRecipes = ({ currentUser }) => {
  const [allUserRecipes, setAllUserRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipesByUserId(currentUser.id).then((recipeArray) => {
      setAllUserRecipes(recipeArray);
      console.log("recipes set");
    });
  }, [currentUser]);

  return (
    <>
      <div>
        <article className="user-recipe-container">
          {allUserRecipes.map((recipe) => {
            return (
              <section
                className="user-recipe-card"
                key={recipe.id}
                onClick={() => {
                  navigate(`/recipes/${recipe.id}`);
                }}
              >
                <header className="user-recipe-title">{recipe.title}</header>
                <img
                  className="user-recipe-image"
                  src={recipe.picture}
                  alt={recipe.title}
                />
              </section>
            );
          })}
        </article>
      </div>
    </>
  );
};
