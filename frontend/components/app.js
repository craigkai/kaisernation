import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'; 

// React Components
import One from '../pages/one';
class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={(props) => <One {...props}
                            proper={this.props}
                        />}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
