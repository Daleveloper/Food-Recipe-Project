import React, { useState } from "react";

function RecipeCreate({ newRecipe }) {
  const [formData, setFormData] = useState({
    name: '', cuisine: '', photo: '', ingredients: '', preparation: ''
  })

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });


  function handleSubmit(e) {
    e.preventDefault()
    const object = formData
    newRecipe(object)
    console.log("line 15", formData)
    console.log("formsubmited")
    setFormData({ name: '', cuisine: '', photo: '', ingredients: '', preparation: '' })
  }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                required
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                required
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Enter Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                required
                id="photo"
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                required
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Enter Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                required
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Enter Preparation"
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
