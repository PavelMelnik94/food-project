import { API_URL as api_url } from './config';

const getMealById = async (mealId) => {
    const response = await fetch(`${api_url}lookup.php?i=${mealId}`);
    return await response.json();
}


const getAllCategories = async () => {
    const response = await fetch(`${api_url}categories.php`);
    return await response.json();

}

const getFilteredCategory = async (catName) => {
    const response = await fetch(`${api_url}filter.php?c=${catName}`);
    return await response.json();

}



export { getMealById, getAllCategories, getFilteredCategory };