import React from 'react';

import './index.scss';

const baseClassName = 'cart-table-item';

class CartTableItem extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            grid: `${baseClassName}__grid`,
            gridButtons: `${baseClassName}__grid-buttons`
        }
    };

    render() {
        const {
            item,
            index,
            onIncrease,
            onDecrease,
            onDelete
        } = this.props;
        const { count, price, name, id } = item;

        const classNames = this.getClassNames();

            return (
                <div className={classNames.component}>
                    <div className={classNames.grid}>{index + 1}</div>
                    <div className={classNames.grid}>{name}</div>
                    <div className={classNames.grid}>{count}</div>
                    <div className={classNames.grid}>{price}</div>
                    <div className={classNames.gridButtons}>
                        <button
                            onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </div>
                </div>
            );
    }
}

export default CartTableItem;
