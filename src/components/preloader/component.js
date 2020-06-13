import React from 'react';

import spinner from '../../icons/spinner.svg';
import './index.scss';

const baseClassName = 'preloader';

class Preloader extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            content: `${baseClassName}__content`
        };
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                <div className={classNames.content}>
                    <img src={spinner} alt="" />
                </div>
            </div>
        );
    }
}

export default Preloader;
