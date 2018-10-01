import $ from 'jquery';

export const CHANGE_REVIEW_MESSAGE = 'CHANGE_REVIEW_MESSAGE TEXT';
export const ADD_REVIEW     = 'ADD_REVIEW';
export const CHANGE_AUTHOR  = 'CHANGE_AUTHOR';
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
        return fetch('/review', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({ message : getState().message, author : getState().author }), // body data type must match "Content-Type" header
        })
        .then(function(){
          dispatch({ type: ADD_REVIEW });
      });
    };
}
