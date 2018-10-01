import React from 'react';
import { render } from 'react-dom';
import Chat from '../components/Chat/Chat';

class Code extends React.PureComponent {
    render() {
        return (
            <div>
                <Chat proper={this.props.proper} />
            </div>
        );
    }
}

export default Code