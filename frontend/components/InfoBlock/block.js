import * as React from 'react';
import styles from './index.module.css';
import global from '../../global.module.css'
import data from '../../data/code'

class Block extends React.PureComponent {
    render() {
        return (
            <div className={styles['info-block-container']}>
                {data.map(d => (
                    <div key={d.title}>
                        <div name="block-image">
                            image here
                        </div>
                        <div name="block-description">
                            <p>{d.description}</p>
                            <div name="block-link">
                                <a href={d.link}>See more here</a>
                            </div>
                        </div>
                        {d.stack.map(({ Icon, label }) => (
                            <span title={label} key={label}>
                                <Icon />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Block