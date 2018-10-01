import React from 'react';
import { render } from 'react-dom';
import Chat from '../components/Chat/Chat';
import Block from '../components/InfoBlock/block';

class Code extends React.PureComponent {
    render() {
        return (
            <div>
                <Chat proper={this.props.proper}>
                    <Block></Block>
                </Chat>
            </div>
        );
    }
}

export default Code