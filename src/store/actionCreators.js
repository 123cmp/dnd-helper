import {
    CHANGE_ADVENTURE_NAME,
    CLOSE_MODALS, FETCH_ADVENTURES, FETCH_ADVENTURES_ERROR, FETCH_ADVENTURES_SUCCESS,
    FETCH_ENEMIES,
    FETCH_ENEMIES_ERROR,
    FETCH_ENEMIES_SUCCESS, FETCH_PLACES, FETCH_PLACES_ERROR, FETCH_PLACES_SUCCESS,
    OPEN_MODAL, SAVE_ADVENTURE, SAVE_ADVENTURE_ERROR, SAVE_ADVENTURE_SUCCESS,
    SEARCH_ENEMY
} from "./actionTypes";
import adventure from "./reducers/adventure";

export const changeAdventureName = (payload) => ({
    type: CHANGE_ADVENTURE_NAME,
    payload
});

export const searchEnemy = (payload) => ({
    type: SEARCH_ENEMY,
    payload
});

export const saveAdventure = () => ({
    type: SAVE_ADVENTURE
});

export const saveAdventureSuccess = () => ({
    type: SAVE_ADVENTURE_SUCCESS
});

export const saveAdventureError = (payload) => ({
    type: SAVE_ADVENTURE_ERROR,
    payload
});

export const fetchAdventures = () => ({
    type: FETCH_ADVENTURES
});

export const fetchAdventuresSuccess = (payload) => ({
    type: FETCH_ADVENTURES_SUCCESS,
    payload
});

export const fetchAdventuresError = (payload) => ({
    type: FETCH_ADVENTURES_ERROR,
    payload
});

export const fetchPlaces = () => ({
    type: FETCH_PLACES
});

export const fetchPlacesSuccess = (payload) => ({
    type: FETCH_PLACES_SUCCESS,
    payload
});

export const fetchPlacesError = (payload) => ({
    type: FETCH_PLACES_ERROR,
    payload
});


export const fetchEnemies = () => ({
    type: FETCH_ENEMIES
});

export const fetchEnemiesSuccess = (payload) => ({
    type: FETCH_ENEMIES_SUCCESS,
    payload
});

export const fetchEnemiesError = (payload) => ({
    type: FETCH_ENEMIES_ERROR,
    payload
});

export const openModal = (name) => ({
    type: OPEN_MODAL,
    payload: { name }
});

export const closeModal = () => ({
    type: CLOSE_MODALS,
});

export const loadEnemies = () => (dispatch) => {
    dispatch(fetchEnemies())
    return fetch("http://localhost:4444/monsters")
        .then(
            (result) => result.json(),
            (error) => dispatch(fetchEnemiesError(error))
        )
        .then(
            (result) => dispatch(fetchEnemiesSuccess(result))
        )
}

export const loadAdventures = () => (dispatch) => {
    dispatch(fetchAdventures())
    return fetch("http://localhost:4444/adventures")
        .then(
            (result) => result.json(),
            (error) => dispatch(fetchAdventuresError(error))
        )
        .then(
            (result) => dispatch(fetchAdventuresSuccess(result))
        )
}

export const loadPlaces = () => (dispatch) => {
    dispatch(fetchPlaces())
    return fetch("http://localhost:4444/places")
        .then(
            (result) => result.json(),
            (error) => dispatch(fetchPlacesError(error))
        )
        .then(
            (result) => dispatch(fetchPlacesSuccess(result))
        )
}

export const updateAdventure = (adventure) => (dispatch) => {
    dispatch(saveAdventure())
    return fetch('http://localhost:4444/adventures', {
        method: 'POST',
        body: JSON.stringify(adventure),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(
        (result) => dispatch(saveAdventureSuccess(result),
        (error) => dispatch(saveAdventureError(error))
    ));
}


