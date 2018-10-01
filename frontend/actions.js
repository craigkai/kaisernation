import $ from 'jquery';

export const CHANGE_REVIEW_MESSAGE = 'CHANGE_REVIEW_MESSAGE TEXT';
export const ADD_REVIEW = 'ADD_REVIEW';
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
export const LATEST_REVIEWS = 'LATEST_REVIEWS';


export function changeMessageText(message) {
    return { type: CHANGE_REVIEW_MESSAGE, message: message };
}

export function onChangeAuthorText(author) {
    return { type: CHANGE_AUTHOR, author: author };
}
// Replace me with promises
export function addMessage() {
    return (dispatch, getState) => {
        $.ajax({
            url: '/review',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ message : getState().message, author : getState().author }),
            success: () => dispatch({ type: ADD_REVIEW }),
        });
    };
}
