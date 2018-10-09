import React from 'react';
import Chat from '../components/Chat/Chat';
import Block from '../components/InfoBlock/block';
import ErrorBoundary from '../components/errorBoundary';
import PageLayout from '../components/PageLayout/PageLayout';
import global from '../global.module.css'

class One extends React.PureComponent {
    render() {
        return (
            <div>
                <PageLayout>
                    <Chat proper={this.props.proper} />
                    <ErrorBoundary component="Block">
                        <div className={global['left-col']}><Block /></div>
                    </ErrorBoundary>
                </PageLayout>
            </div>
        );
    }
}

export default One
