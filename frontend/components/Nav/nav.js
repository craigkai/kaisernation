import * as React from 'react'
import styles from './index.module.css';
import global from '../../global.module.css';

class Navbar extends React.PureComponent {
  render() {
    return (
        <div className={styles['pure-menu'] && styles['pure-menu-horizontal']}>
            <ul className={styles['pure-menu-list']}>
                <li className={styles['pure-menu-item']}><a className={styles['pure-menu-link']} href="/">Home</a></li>
                <li className={styles['pure-menu-item']}><a className={styles['pure-menu-link']} href="/work">Work</a></li>
                <li className={styles['pure-menu-item']}><a className={styles['pure-menu-link']} href="/code">Code</a></li>
            </ul>
        </div>
    )
  }
}

export default Navbar
