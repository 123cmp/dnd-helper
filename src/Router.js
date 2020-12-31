import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import HomePage from "./pages/HomePage";
import Redirect from "react-router-dom/Redirect";
import MapsPage from "./pages/MapsPage";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage";
import EnemiesPage from "./pages/EnemiesPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route path='/maps' component={MapsPage}/>
                <Route path='/enemies' component={EnemiesPage}/>
                <Route path='/places' exact component={PlacesPage}/>
                <Route path='/places/:id' component={PlacePage}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router