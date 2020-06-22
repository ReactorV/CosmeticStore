import React from 'react';

import CartTableItem from '../cart-table-item';
import './index.scss';

const baseClassName = 'cart-table';

class CartTable extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            caption: `${baseClassName}__caption`,
            total: `${baseClassName}__total`
        }
    };

    render () {
        const {
            items = [],
            total = 0,
        } = this.props;

        const classNames = this.getClassNames();

        const cartTableItemsOutput = items.map((item, index) => {
            return (
                <CartTableItem item={item} index={index} key={index}/>
            );
        });

        const totalSum = `Total: $${total}`;

        return (
            <div className={classNames.component}>
                <div className={classNames.caption}>
                    CartTable
                </div>
                {cartTableItemsOutput}
                <div className={classNames.total}>{totalSum}</div>
            </div>
        );
    }
}

export default CartTable;
