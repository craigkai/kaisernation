import * as React from 'react';
import styles from './index.module.css';
import global from '../../global.module.css'
import data from '../../data/code'

class Block extends React.PureComponent {
    render() {
        return (
            <div>
                {data.map(d => (
                    <div key={d.title} name="info-container" className={styles['info-block-container']}>
                        <div>
                            <h3>{['Project: ' + d.title,
                                'Position: ' + d.position].join(', ')}</h3>
                            <div className={styles['info-block-container']}>
                                <div name="Icons" className={styles['icons']}>
                                {d.stack.map(({ Icon, label }) => (
                                    <div title={label} key={label}>
                                        <Icon />
                                    </div>
                                ))}
                                </div>
                                <div>
                                    {d.description}
                                    { d.link == null ? '' : <div><a href={d.link}>See more here</a></div> }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Block