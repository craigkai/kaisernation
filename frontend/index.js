import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'; 

// React Components
import Code from './pages/code';
import Work from './pages/work';
import Landing from './pages/landing';

// REDUX
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { messageReducer } from './reducer';

var App = props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/code" component={Code}/>
        </Switch>
    </BrowserRouter>
);

function mapProps(state) {
    return state;
}

let store = createStore(messageReducer);
let ConnectedApp = connect(mapProps)(App);

render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
document.getElementById('container'));
