import * as React from 'react'
import styles from './index.module.css';

class PageLayout extends React.PureComponent {
    render() {
        return (
            <div>
                <div className={styles['container']}>
                    <div className={styles.centered}>
                        {this.props.children}
                    </div>
                </div>
                <footer className={styles.footer}>
                source code on <a href="https://github.com/craigkai/kaisernation">github</a> (Be kind with your judgements)
                </footer>
            </div>
        )
    }
}

export default PageLayout