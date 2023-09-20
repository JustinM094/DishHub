import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { DisplayHomePage } from "../components/HomePage/HomePage";
import { DisplayUsersRecipes } from "../components/UsersRecipes/UsersRecipes";
import { RecipeDetails } from "../components/RecipeDetails/RecipeDetails";
import { EditRecipe } from "../components/forms/EditRecipe";
import { NewRecipeForm } from "../components/forms/AddRecipe";
import { useEffect, useState } from "react";
import { DisplayHomeRecipeDetails } from "../components/HomePage/HPRecipeDetails";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localDishHubUser = localStorage.getItem("dishhub_user");
    const dishHubUserObject = JSON.parse(localDishHubUser);

    setCurrentUser(dishHubUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<DisplayHomePage />} />
        <Route path=":homeRecipeId" element={<DisplayHomeRecipeDetails />} />
        <Route path="recipes">
          <Route
            index
            element={<DisplayUsersRecipes currentUser={currentUser} />}
          />
          <Route path=":recipeId" element={<RecipeDetails />} />
          <Route path=":recipeId/edit" element={<EditRecipe />} />
        </Route>
        <Route path="add" element={<NewRecipeForm />} />
      </Route>
    </Routes>
  );
};
