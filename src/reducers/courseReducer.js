import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        // for future reference
       /* case types.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.payload)
            ];*/
        case types.LOAD_COURSE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}