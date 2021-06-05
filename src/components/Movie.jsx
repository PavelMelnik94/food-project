import React from "react";
import {useParams, useHistory, useRouteMatch, Link, Switch, Route} from 'react-router-dom';

export default function Movie() {

    let { title } = useParams();

    let value = useHistory();

    let { path, url } = useRouteMatch();
   

    return <div>
        Now showing post {title}
    

    <ul>
        <li><Link to={`${url}/matrix`}>matrix</Link> </li>
        <li><Link to={`${url}/terminator`}>terminator</Link> </li>
        <li><Link to={`${url}/shrek`}>shrek</Link> </li>
    </ul>
    
    <Switch>
        <Route path={`${path}/matrix`} />
        <Route path={`${path}/terminator`} />
        <Route path={`${path}/shrek`} />
    </Switch>
    
    </div>;
}
