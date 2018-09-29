import React from 'react';
import { render } from 'react-dom';
import Chat from '../components/Chat/Chat';
import NavBar from '../components/Nav/Nav';
import PageLayout from '../components/PageLayout/PageLayout';

class Code extends React.PureComponent {
    render() {
        return (
            <div>
                <PageLayout>
                    <NavBar />
                    <Chat>
                        Other components Here
                    </Chat>
                </PageLayout>
            </div>
        );
    }
}

export default Code