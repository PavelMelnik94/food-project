import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

function Recipe(props) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
    return () => {
      console.log("unmount");
    };
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>категория: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>происхождение: {recipe.strArea}</h6> : null}
          <p>рецепт: {recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>ингридиент</th>
                <th>мера</th>
              </tr>
              
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{margin: '2rem 0 1.5rem'}}>видео рецепт</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
          <button className="btn" onClick={goBack}>
            назад
          </button>
        </div>
      )}
    </>
  );
}

export default Recipe;
