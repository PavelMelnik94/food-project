import React from "react";
import {useParams, useHistory} from 'react-router-dom';

export default function Movie() {

    let { title } = useParams();
    console.log(title);

    return <div>Now showing post {title}</div>;
}
