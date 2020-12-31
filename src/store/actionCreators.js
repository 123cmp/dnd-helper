import {
    CHANGE_ADVENTURE_NAME,
    FETCH_ENEMIES,
    FETCH_ENEMIES_ERROR,
    FETCH_ENEMIES_SUCCESS,
    SEARCH_ENEMY
} from "./actionTypes";

export const changeAdventureName = (payload) => ({
    type: CHANGE_ADVENTURE_NAME,
    payload
});

export const searchEnemy = (payload) => ({
    type: SEARCH_ENEMY,
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

export const loadEnemies = () => (dispatch) => {
    dispatch(fetchEnemies())
    return fetch("http://localhost:4444")
        .then(
            (result) => result.json(),
            (error) => dispatch(fetchEnemiesError(error))
        )
        .then(
            (result) => dispatch(fetchEnemiesSuccess(result))
        )
}

