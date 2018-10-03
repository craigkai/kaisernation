import * as React from 'react'
import styles from './index.module.css';
import global from '../../global.module.css'

class PageLayout extends React.PureComponent {
    render() {
        return (
            <div>
                <div className={[global.container, global.centered].join(' ')}>
                    {this.props.children}
                </div>
                <div>
                    <footer className={global.footer}>
                        source code on <a href="https://github.com/craigkai/kaisernation">github</a> (Be kind with your judgements)
                    </footer>
                </div>
            </div>
        )
    }
}

export default PageLayout