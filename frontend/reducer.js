import * as ActionTypes from './actions';

const initialState = {
    message: ''
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_MESSAGE_TEXT:
            return { ...state, message: action.text };
        case ActionTypes.ADD_MESSAGE:
            return { ...state, messageText: '' };
        default:
            return state;
    }
}