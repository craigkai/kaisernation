import * as React from 'react'
import styles from './index.module.css';

class PageLayout extends React.PureComponent {
    render() {
        return (
            <div className={styles.centered}>
                {this.props.children}
            </div>
        )
    }
}

export default PageLayout