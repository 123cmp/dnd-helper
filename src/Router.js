import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import HomePage from "./pages/HomePage/HomePage";
import Redirect from "react-router-dom/Redirect";
import MapsPage from "./pages/MapsPage/MapsPage";
import PlacesPage from "./pages/PlacePage/PlacesPage";
import PlacePage from "./pages/PlacePage/PlacePage";
import EnemiesPage from "./pages/EnemiesPage/EnemiesPage";
import EnemyPage from "./pages/EnemiesPage/EnemyPage";
import ModalHost from "./components/modals/ModalHost";
import {Provider} from "react-redux";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route path='/maps' component={MapsPage}/>
                <Route path='/enemies/:id' component={EnemyPage}/>
                <Route path='/enemies' component={EnemiesPage}/>
                <Route path='/places' exact component={PlacesPage}/>
                <Route path='/places/:id' component={PlacePage}/>
                <Redirect from='/' to='/home'/>
            </Switch>
            <ModalHost />
        </BrowserRouter>
    );
}

export default Router