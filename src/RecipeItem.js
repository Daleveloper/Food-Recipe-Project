import React from "react";

export default function RecipeItem({recipe, deleteRecipe}){
  return (
  
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img alt={recipe.name} src={recipe.photo}/>
      </td>
      <td className="content_td">{recipe.ingredients}</td>
      <td className="content_td">{recipe.preparation}</td>
      <td>
        <button name='delete' onClick={deleteRecipe}>delete</button>
      </td>
    </tr>
 
  );
}