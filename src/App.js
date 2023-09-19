import { DisplayHomePage } from "./components/HomePage/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { DisplayUsersRecipes } from "./components/UsersRecipes/UsersRecipes.js";
import { NewRecipeForm } from "./components/forms/AddRecipe";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails";

export const App = () => {
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
        <Route path="recipes">
          <Route index element={<DisplayUsersRecipes />} />
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        <Route path="add" element={<NewRecipeForm />} />
      </Route>
    </Routes>
  );
};
