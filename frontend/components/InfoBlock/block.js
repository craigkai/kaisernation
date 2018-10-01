import * as React from 'react';
import styles from './index.module.css';
import grid from '../grid.module.css'

class Block extends React.PureComponent {
    render() {
        return (
            <div className={grid['pure-g']}>
                
                    <div name="block-image" className={grid['pure-u-1']}>
                        <h1>Image Here</h1>
                    </div>
                
                    <div name="block-description" className={grid['pure-u-1']}>
                        <p>Some long description to get you excited</p>
                        <div name="block-link">
                            <a href="#">See more here</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Block