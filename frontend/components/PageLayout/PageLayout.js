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
                    This is a footer
                </footer>
            </div>
        )
    }
}

export default PageLayout