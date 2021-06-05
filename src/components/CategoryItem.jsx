import React from "react";
import {Link} from 'react-router-dom';

export default function CategoryItem(props) {
  const {
    idCategory: id,
    strCategory: name,
    strCategoryThumb: img,
    strCategoryDescription: descr,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={name}/>
        
        
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>
          {descr.slice(0, 100)} ...
        </p>
      </div>
      <div className="card-action">
          <Link to={`/category/${id}`} className='btn'>смотреть категорию</Link>
      </div>
    </div>
  );
}
