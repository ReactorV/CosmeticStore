import React from 'react';

import CartTableItem from '../cart-table-item';
import './index.scss';

const baseClassName = 'cart-table';

class CartTable extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            caption: `${baseClassName}__caption`,
            header: `${baseClassName}__header`,
            grid: `${baseClassName}__grid`,
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
                <div className={classNames.header}>
                    <div className={classNames.grid}>#</div>
                    <div className={classNames.grid}>Item</div>
                    <div className={classNames.grid}>Count</div>
                    <div className={classNames.grid}>Price</div>
                    <div className={classNames.grid}>Action</div>
                </div>
                {cartTableItemsOutput}
                <div className={classNames.total}>{totalSum}</div>
            </div>
        );
    }
}

export default CartTable;
