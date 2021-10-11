import {
    CHANGE_ADVENTURE_NAME,
    CLOSE_MODALS,
    FETCH_ADVENTURES,
    FETCH_ADVENTURES_ERROR,
    FETCH_ADVENTURES_SUCCESS,
    FETCH_PLACES, FETCH_PLACES_ERROR,
    FETCH_PLACES_SUCCESS,
    OPEN_MODAL, PUT_PLACE, PUT_PLACE_ERROR, PUT_PLACE_SUCCESS,
    SAVE_ADVENTURE,
    SAVE_ADVENTURE_ERROR,
    SAVE_ADVENTURE_SUCCESS, SAVE_PLACE, SAVE_PLACE_ERROR, SAVE_PLACE_SUCCESS
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
                adventures: [ new AdventureModel(action.payload) ],
            };
        }

        case SAVE_ADVENTURE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }

        case SAVE_PLACE: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case SAVE_PLACE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                places: state.places.map(
                    place => {
                        return place.id === action.payload.id
                            ? new PlaceModel(action.payload)
                            : place
                    }
                ),
            };
        }

        case SAVE_PLACE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }

        case PUT_PLACE: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case PUT_PLACE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                places: state.places.push(action.payload)
            };
        }

        case PUT_PLACE_ERROR: {
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
