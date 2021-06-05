import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";
import { MealList } from "../components/MealList";
import { useHistory } from "react-router-dom";

function Category(props) {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();

  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
    return () => {
      console.log("dismount");
    };
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        назад
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
