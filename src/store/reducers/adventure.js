import { CHANGE_ADVENTURE_NAME } from "../actionTypes";

const initialState = {
    name: 'Adventure1',
    description: 'qwe',
    notes: 'qwe',
    id: '12323',
    images: []
};

export default function Adventure(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ADVENTURE_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            };
        }
        default:
            return state;
    }
}
