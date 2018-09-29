import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/Nav/Nav';
import PageLayout from '../components/PageLayout/PageLayout';

class Work extends React.PureComponent {
    render() {
        return (
            <div>
                <PageLayout>
                    <NavBar />
                    Welcome To My Work Page!
                </PageLayout>
            </div>
        );
    }
}

export default Work