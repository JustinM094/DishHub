import "./HomePage.css";
import { useState, useEffect } from "react";
import { getRecipes } from "../../Services/RecipeService";
import { useNavigate } from "react-router-dom";

export const DisplayHomePage = () => {
  const [everyUsersRecipes, setEveryUsersRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getRecipes().then((recipeArray) => {
      setEveryUsersRecipes(recipeArray);
      console.log("recipes set");
    });
  }, []);
  return (
    <>
      <section className="welcome-page">
        <div className="welcome-background">
          <h1>
            <span>Welcome to</span>
          </h1>
          <h1>
            <span>DishHub</span>
          </h1>
        </div>
        <div className="recent-recipes">
          <h2>Recently added Recipes</h2>
        </div>
        <div>
          <article className="user-recipe-container">
            {everyUsersRecipes.map((recipe) => {
              return (
                <section
                  className="user-recipe-card"
                  key={recipe.id}
                  onClick={() => {
                    navigate(`${recipe.id}`);
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
      </section>
    </>
  );
};
