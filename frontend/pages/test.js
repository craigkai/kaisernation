import React from 'react';
import { render } from 'react-dom';

class Test extends React.PureComponent {
    render() {
        const root = this.props.proper;
        return (
            <div>
                <div>
                    <h2>Leave A Review Or Comment:</h2>
                    {root.latestReviews.map(r => <p key={r.id}>[{r.author}:] {r.message}</p>)}
                </div>
                <div>
                    <textarea rows="2" cols="50" maxLength="200"
                        value={root.messageText}
                        onChange={e => root.onChangeMessageText(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Author"
                        value={root.authorText}
                        onChange={e => root.onChangeAuthorText(e.target.value)}
                    />
                </div>
                <input type="button" value="Add Message" onClick={root.onAddMessage} />
            </div>
        );
    }
}

export default Test
