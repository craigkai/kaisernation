import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'; 

// React Components
import Work from '../pages/work';
import Landing from '../pages/landing';
import Code from '../pages/code';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/code" render={(props) => <Code {...props}
                            proper={this.props}
                        />}
                    />
                    <Route exact path="/work" component={Work}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
