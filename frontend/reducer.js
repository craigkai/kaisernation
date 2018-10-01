import * as ActionTypes from './actions';

const initialState = {
    message: '',
    author:  '',
    latestReviews: []
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_REVIEW_MESSAGE:
            return { ...state, message: action.message };
        case ActionTypes.CHANGE_AUTHOR:
            return { ...state, author: action.author };
        case ActionTypes.ADD_REVIEW:
            return { ...state,
                message: '',
                author : '',
            };
        case ActionTypes.LATEST_REVIEWS: {
            let review = {
                id: action.id,
                message: action.message,
                author: action.author,
            };
            var latest = [review, ...state.latestReviews];
            return {
                ...state,
                latestReviews: latest.sort((a, b) => a.id - b.id)
            };
        }
        default:
            return state;
    }
}
