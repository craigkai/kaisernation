import * as React from 'react'
import styles from './index.module.css';
import global from '../../global.module.css'
import NavBar from '../../components/Nav/Nav';
import PageLayout from '../../components/PageLayout/PageLayout';

class Chat extends React.PureComponent {
    render() {
      const root = this.props.proper;
      var latestReviews = root.latestReviews;
      latestReviews = latestReviews.slice(
            latestReviews.length-5 > 0 ? latestReviews.length-5 : 0,
            latestReviews.length
      );
      return (
        <div name="chat-container" className={styles['chat-container']}>
            <div>
                <h4>Leave a comment:</h4>
                {latestReviews.map(r => <p key={r.id}>[ {r.author} ] {r.message}</p>)}
            </div>
            <textarea cols="18"
                value={root.message}
                onChange={e => root.onChangeMessageText(e.target.value)}
            />
            <div>
                <input type="text" placeholder="Author"
                    value={root.author}
                    onChange={e => root.onChangeAuthorText(e.target.value)}
                />
            </div>
            <input type="button" value="Add Message" onClick={root.onAddMessage} />
        </div>
      )
    }
}

export default Chat
