import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeItem from "./RecipeItem";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function deleteRecipe(targetIdx){
    const newRecipesArray = recipes.filter((recipe, index)=>{
      if(index === targetIdx){
        return false;
      }else{
        return true
      }
    })
    setRecipes(newRecipesArray);
  }
  
  function newRecipe(recipe){
    setRecipes([...recipes, recipe])
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes}  deleteRecipe={deleteRecipe}/>
      <RecipeCreate newRecipe={(object)=> setRecipes([...recipes, object])}/>
    </div>
  );
}

export default App;
