import React from 'react';

import CosmeticsListItem from '../cosmetics-list-item';

import './index.scss';

const baseClassName = 'cosmetics-list';

class CosmeticsList extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName
        }
    };

    render() {
        const { cosmetics = [], onIncrease } = this.props;

        const classNames = this.getClassNames();

        cosmetics.length = 2;

        const  cosmeticsOutput = cosmetics.map((item, index) => {
            return (
                <CosmeticsListItem
                    item={item}
                    onAddedCartItem={() => onIncrease(item.id)}
                    key={index}
                />
            );
        });

        return (
            <div className={classNames.component}>
                {cosmeticsOutput}
            </div>
        );


    }
}

export default CosmeticsList;
