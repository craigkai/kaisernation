import $ from 'jquery';

export const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE TEXT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function changeMessageText(text) {
    return { type: CHANGE_MESSAGE_TEXT, text };
}
export function addMessage() {
    return { type: ADD_MESSAGE };
}