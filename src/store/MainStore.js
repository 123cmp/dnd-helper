import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';
import {loadEnemies} from "./actionCreators";

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

store.dispatch(loadEnemies());

export default store;