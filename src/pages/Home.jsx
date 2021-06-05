import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import Preloader from '../components/Preloader';
import {CategoryList} from '../components/CategoryList.jsx';

export default function Home() {

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => setCatalog(data.categories))
    return () => {
      console.log('dismount');
    }
  }, [])
  return (
    <>
      {!catalog.length ? <Preloader /> : (
      <CategoryList catalog={catalog} />
      )}
    </>
  );
}
