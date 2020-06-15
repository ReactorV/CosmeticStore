import React from 'react';

import './index.scss';

const baseClassName = 'cart-header';

class CartHeader extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            title: `${baseClassName}__title`,
            details: `${baseClassName}__details`,
            detailsItems: `${baseClassName}__details-items`,
            detailsTotal: `${baseClassName}__details-total`
        }
    };

    render() {
        const { numItems, total } = this.props;

        const classNames = this.getClassNames();

        const totalPrice = `($${total})`;

        return (
            <div className={classNames.component}>
                <div className={classNames.title}>
                    Cosmetics Store
                </div>
                <div className={classNames.details}>
                    <div className={classNames.detailsItems}>
                        {numItems} items
                    </div>
                    <div className={classNames.detailsTotal}>
                        {totalPrice}
                    </div>
                </div>
            </div>
        );


    }
}

export default CartHeader;
