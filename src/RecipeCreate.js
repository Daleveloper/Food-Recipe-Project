import React, { useState } from "react";

function RecipeCreate({newRecipe}) {
const [formData, setFormData] = useState({
  name:'', cuisine:'', photo:'', ingredients:'', preparation:''
})

 const handleChange = (event) => setFormData({...formData, [event.target.name]:event.target.value });
 
 
  function handleSubmit(e){
    e.preventDefault()
    const object = formData  
    newRecipe(object)   
    console.log("line 15", formData)
    console.log("formsubmited")
    setFormData({name:'', cuisine:'', photo:'', ingredients:'', preparation:''})
  }
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
               
                id="photo"
                type="text"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
               <textarea
              id="preparation"
              type="text"
              name="preparation"
              onChange={handleChange}
              value={formData.preparation}
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
