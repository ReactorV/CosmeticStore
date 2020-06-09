import React from 'react';

import './index.scss';

const baseClassName = 'item';

class CosmeticsListItem extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName
        }
    };

    render() {
        const { item } = this.props;

        const classNames = this.getClassNames();

            return (
                <div className={classNames.component}>
                    <div>{item.brand}</div>
                    <div>{item.category}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    <div>{item.apiImage}</div>
                </div>
            );
    }
}

export default CosmeticsListItem;
