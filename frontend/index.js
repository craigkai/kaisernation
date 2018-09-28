import React from 'react';
import { render } from 'react-dom';
import NavBar from './components/Nav/nav';
import PageLayout from './components/PageLayout/page-layout';


var Index = props => (
    <div>
        <PageLayout>
            <NavBar />
            Welcome
        </PageLayout>
    </div>
);

var Code = props => (
    <div>
        <PageLayout>
            <NavBar />
            Welcome To My Code Page!
        </PageLayout>
    </div>
);

var Work = props => (
    <div>
        <PageLayout>
            <NavBar />
            Welcome To My Work Page!
        </PageLayout>
    </div>
);

var apps = {Index, Work, Code};

function renderAppInElement(el) {
    var App = apps[el.id];
    if (!App) return;

    // get props from elements data attribute, like the post_id
    const props = Object.assign({}, el.dataset);
  
    render(<App {...props} />, el);
  }

document
.querySelectorAll('.__react-root')
.forEach(renderAppInElement)
