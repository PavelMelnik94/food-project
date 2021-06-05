import { useEffect, useState } from 'react'
import  { getFilteredCategory } from '../api';
import { useParams } from 'react-router-dom';
import Preloader from '../components/Preloader';
import {MealList} from '../components/MealList'

function Category(props) {

    

    const [meals, setMeals] = useState([]);

    const { name } = useParams();

   useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals))
       return () => {
           console.log('dismount');
       }
   }, [name])

    return (
        <>

        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
            
        </>
    )
}


export {Category};          