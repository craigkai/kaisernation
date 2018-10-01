import React from 'react';
import { render } from 'react-dom';

import App from './components/app';
import * as Actions from './actions';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { messageReducer } from './reducer';
import thunkMiddleware from 'redux-thunk';

// Web Socket
import WSAction from 'redux-websocket-action';

function mapProps(state) {
    return state;
}
function mapDispatch(dispatch) {
    return {
        onChangeMessageText: message => dispatch(Actions.changeMessageText(message)),
        onChangeAuthorText: author => dispatch(Actions.onChangeAuthorText(author)),
        onAddMessage: (message, author) => dispatch(Actions.addMessage()),
    };
}

let store = createStore(messageReducer, applyMiddleware(thunkMiddleware));

let host = window.location.host;
let wsAction = new WSAction(store, 'ws://' + host + '/latest-reviews', {
    retryCount:3,
    reconnectInterval: 3
});
wsAction.start();

let ConnectedApp = connect(mapProps, mapDispatch)(App);

render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
document.getElementById('container'));
