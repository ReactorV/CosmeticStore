import React from 'react';

import './index.scss';

const baseClassName = 'cart-table';

class CartTable extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            caption: `${baseClassName}__caption`,
            header: `${baseClassName}__header`,
            grid: `${baseClassName}__grid`,
            gridRow: `${baseClassName}__grid-row`,
            gridButtons: `${baseClassName}__grid-buttons`,
            total: `${baseClassName}__total`
        }
    };

    render () {
        const {
            items = [],
            total = 0,
            onIncrease,
            onDecrease,
            onDelete
        } = this.props;

        const classNames = this.getClassNames();
debugger
        const cartTableItemsOutput = items.map((item, index) => {
            return (
                <div className={classNames.gridRow} key={item.id}>
                    <div className={classNames.grid}>{index + 1}</div>
                    <div className={classNames.grid}>{item.name}</div>
                    <div className={classNames.grid}>{item.count}</div>
                    <div className={classNames.grid}>{item.price}</div>
                    <div className={classNames.gridButtons}>
                        <button
                            onClick={() => onDelete(item.id)}
                            className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            onClick={() => onIncrease(item.id)}
                            className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => onDecrease(item.id)}
                            className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </div>
                </div>
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
                    <div className={classNames.grid}>Total</div>
                    <div className={classNames.grid}>Action</div>
                </div>
                {cartTableItemsOutput}
                <div className={classNames.total}>{totalSum}</div>
            </div>
        );
    }
}

export default CartTable;
