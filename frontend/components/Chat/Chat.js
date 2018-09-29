import * as React from 'react'
import styles from './index.module.css';
import { Provider, connect } from 'react-redux';
import * as Actions from '../../actions';

class Chat extends React.PureComponent {
  render() {
    return (
      <div className={styles['pure-g']}>
          <div className={styles['pure-u-md-1-2'] && styles['pure-u-1']}>{this.props.children}</div>
          <div className={styles['pure-u-md-1-2'] && styles['pure-u-1']}>
          <div>
              <h2>Got a message?</h2>
              <div>
                  <textarea rows="2" cols="100" maxLength="200"
                      value={this.props.messageText}
                      onChange={e => this.props.onChangeMessageText(e.target.value)} />
              </div>
              <input type="button" value="Add Tip" onClick={this.props.onAddMessage} />
          </div>
          </div>
      </div>
    )
  }
}

function mapProps(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
      onChangeMessageText: text => dispatch(Actions.changeMessageText(text)),
      onAddMessage: text => dispatch(Actions.addMessage())
  };
}

export default connect(mapProps, mapDispatch)(Chat);
