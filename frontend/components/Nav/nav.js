import * as React from 'react'
import styles from './index.module.css';

class Navbar extends React.PureComponent {
  render() {
    return (
        <div className={styles['pure-menu'] && styles['pure-menu-horizontal']}>
            <ul className={styles['pure-menu-list']}>
                <li className={styles['pure-menu-item']}><a href="/" className={styles['pure-menu-link']}>Home</a></li>
                <li className={styles['pure-menu-item']}><a href="/work" className={styles['pure-menu-link']}>Work</a></li>
                <li className={styles['pure-menu-item']}><a href="/code" className={styles['pure-menu-link']}>Code</a></li>
            </ul>
        </div>
    )
  }
}

export default Navbar
