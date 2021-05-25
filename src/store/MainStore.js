import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';
import {loadAdventures, loadEnemies, loadPlaces} from "./actionCreators";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
);

const store = createStore(
    rootReducer,
    enhancer,
);

store.dispatch(loadEnemies());
store.dispatch(loadAdventures());
store.dispatch(loadPlaces());

export default store;