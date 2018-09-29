import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/Nav/Nav';
import PageLayout from '../components/PageLayout/PageLayout';

class Landing extends React.PureComponent {
    render() {
        return (
            <div>
                <PageLayout>
                    <NavBar />
                    Welcome
                </PageLayout>
            </div>
        );
    }
}

export default Landing
