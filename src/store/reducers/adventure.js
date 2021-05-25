import {
    CHANGE_ADVENTURE_NAME,
    CLOSE_MODALS,
    FETCH_ADVENTURES,
    FETCH_ADVENTURES_ERROR,
    FETCH_ADVENTURES_SUCCESS,
    FETCH_PLACES, FETCH_PLACES_ERROR,
    FETCH_PLACES_SUCCESS,
    OPEN_MODAL,
    SAVE_ADVENTURE,
    SAVE_ADVENTURE_ERROR,
    SAVE_ADVENTURE_SUCCESS
} from "../actionTypes";
import AdventureModel from "../models/AdventureModel";
import PlaceModel from "../models/PlaceModel";

const initialState = {
    isFetching: false,
    error: null,
    adventures: [],
    searchResult: []
};

export default function Adventure(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADVENTURES: {
            return {
                ...state,
                isFetching: true,
                adventures: []
            };
        }

        case FETCH_PLACES: {
            return {
                ...state,
                isFetching: true,
                places: []
            };
        }

        case FETCH_ADVENTURES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                adventures: [ new AdventureModel(action.payload) ],
            };
        }

        case FETCH_PLACES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                places: action.payload.map(place => new PlaceModel(place)),
            };
        }

        case FETCH_ADVENTURES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }

        case FETCH_PLACES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }


        case SAVE_ADVENTURE: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case SAVE_ADVENTURE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
            };
        }

        case SAVE_ADVENTURE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }

        case CHANGE_ADVENTURE_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            };
        }
        case OPEN_MODAL: {
            const { name } = action.payload;
            return {
                ...state,
                modals: {
                    [name]: true
                }
            };
        }
        case CLOSE_MODALS: {
            return {
                ...state,
                modals: {}
            };
        }
        default:
            return state;
    }
}
