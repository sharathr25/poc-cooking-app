import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DishList, Dish } from './routes';
import './App.module.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <DishList />
                </Route>
                <Route path="/dish">
                    <Dish />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;