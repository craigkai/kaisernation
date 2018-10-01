import * as React from 'react'
import styles from './index.module.css';
import grid from '../grid.module.css';
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
        <div>
          <PageLayout>
            <div className={grid['pure-g']}>
                <div className={grid['pure-u-1']}>
                  <NavBar />
                  {this.props.children}
                </div>
            </div>
          </PageLayout>
          <div name="chat-container" className={grid['pure-g'] && styles['chat-container']}>
            <div className={grid['pure-u-md-2-3']} />
            <div className={grid['pure-u-md-1-3']}>
                <div className={styles['chat-content']}>
                  <h2>Comments:</h2>
                  {latestReviews.map(r => <p key={r.id}>[ {r.author} ] {r.message}</p>)}
                </div>
                <textarea
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
          </div>
      </div>
      )
    }
}

export default Chat
