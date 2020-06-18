import React from 'react';

import './index.scss';

const baseClassName = 'cart-table';

class CartTable extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            caption: `${baseClassName}__caption`,
            grid: `${baseClassName}__grid`,
            gridButtons: `${baseClassName}__grid-buttons`,
            total: `${baseClassName}__total`
        }
    };

    render () {
        const classNames = this.getClassNames();

        return (
            <>
                <div className={classNames.caption}>
                    CartTable
                </div>
                <div className={classNames.component}>
                    <div className={classNames.grid}>#</div>
                    <div className={classNames.grid}>Item</div>
                    <div className={classNames.grid}>Count</div>
                    <div className={classNames.grid}>Price</div>
                    <div className={classNames.grid}>Action</div>
                    <div className={classNames.grid}>1</div>
                    <div className={classNames.grid}>Maybelline</div>
                    <div className={classNames.grid}>2</div>
                    <div className={classNames.grid}>$20</div>
                    <div className={classNames.gridButtons}>
                        <button
                            className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </div>
                    <div className={classNames.total}>Total: $200</div>
                </div>
            </>
        );
    }
}

export default CartTable;
