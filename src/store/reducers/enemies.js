import {FETCH_ENEMIES, FETCH_ENEMIES_ERROR, FETCH_ENEMIES_SUCCESS, SEARCH_ENEMY} from "../actionTypes";

const initialState = {
    isFetching: false,
    error: null,
    enemies: [],
    searchResult: []
};

export default function Enemies(state = initialState, action) {
    switch (action.type) {
        case FETCH_ENEMIES: {
            return {
                ...state,
                isFetching: true,
                enemies: []
            };
        }
        case FETCH_ENEMIES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                enemies: action.payload,
                searchResult: action.payload.slice(0, 10)
            };
        }
        case FETCH_ENEMIES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }
        case SEARCH_ENEMY: {
            const name = action.payload;
            return name.length < 3
                ? {
                    ...state,
                    searchResult: state.enemies.slice(0, 10)
                }
                : {
                    ...state,
                    searchResult: state.enemies
                        .filter((enemy) => enemy.name.toLowerCase().includes(name.toLowerCase()))
                        .slice(0, 10)
                }
        }
        default:
            return state;
    }
}
