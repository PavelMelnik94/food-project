import React from "react";
import Meal from "./Meal";


function MealList(props) {
  const {meals} = props

  return <div className='list'>
  
  {meals.map(meal => {
      return <Meal key={meal.idMeal} {...meal}/>
  })}
  
  </div>;
}

export { MealList };
