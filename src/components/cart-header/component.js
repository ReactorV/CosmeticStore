import React from 'react';

import './index.scss';

const baseClassName = 'cart-header';

class CartHeader extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            title: `${baseClassName}__title`,
            details: `${baseClassName}__details`,
            detailsCart: `${baseClassName}__details-cart`,
            detailsCartItems: `${baseClassName}__details-cart-items`,
            detailsCartTotal: `${baseClassName}__details-cart-total`
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
                    <a href="#" className={classNames.detailsCart}>
                        <i className={'fa fa-shopping-cart'} />
                        <div className={classNames.detailsCartItems}>
                            {numItems} items
                        </div>
                        <div className={classNames.detailsCartTotal}>
                            {totalPrice}
                        </div>
                    </a>

                </div>
            </div>
        );


    }
}

export default CartHeader;
