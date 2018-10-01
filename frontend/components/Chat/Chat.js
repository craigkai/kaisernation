import * as React from 'react'
import styles from './index.module.css';

class Chat extends React.PureComponent {
    render() {
      const root = this.props.proper;
      return (
        <div className={styles['pure-g']}>
            <div className={styles['pure-u-md-1-2'] && styles['pure-u-1']}>
                <h2>Leave A Review Or Comment:</h2>
                {root.latestReviews.map(r => <p key={r.id}>[{r.author}:] {r.message}</p>)}
            </div>
            <div className={styles['pure-u-md-1-2'] && styles['pure-u-1']}>{this.props.children}</div>
            <div className={styles['pure-u-md-1-2'] && styles['pure-u-1']}>
              <div>
                  <textarea rows="2" cols="100" maxLength="200"
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
        </div>
      )
    }
}

export default Chat
