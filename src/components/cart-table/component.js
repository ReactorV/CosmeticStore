import React from 'react';

import './index.scss';

const baseClassName = 'cart-table';

class CartTable extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName
        }
    };

    render () {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                CartTable
            </div>
        );
    }
}

export default CartTable;
