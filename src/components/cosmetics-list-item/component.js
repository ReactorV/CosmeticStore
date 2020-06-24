import React from 'react';

import './index.scss';

const baseClassName = 'cosmetics-list-item';

class CosmeticsListItem extends React.PureComponent {

    getClassNames = () => {
        return {
            component: baseClassName,
            info: `${baseClassName}__info`,
            brand: `${baseClassName}__brand`,
            price: `${baseClassName}__price`,
            description: `${baseClassName}__description`,
            icon: `${baseClassName}__icon`,
            button: `${baseClassName}__button`
        }
    };

    render() {
        const { item } = this.props;

        const classNames = this.getClassNames();

        const itemPrice = `$${item.price}`;
        const buttonClassName = `btn btn-info ${classNames.button}`;

            return (
                <div className={classNames.component}>
                    <div className={classNames.icon}>
                        <img src={item.apiImage} alt=''/>
                    </div>
                    <div className={classNames.info}>
                        <div className={classNames.brand}>
                            {item.brand}
                        </div>
                        <div className={classNames.price}>
                            {itemPrice}
                        </div>
                        <div className={classNames.description}>
                            {item.description}
                        </div>
                        <button
                            className={buttonClassName}
                            onClick={addCartItem}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            );
    }
}

export default CosmeticsListItem;
