import React from 'react';

import Preloader from '../../components/preloader';
import ErrorIndicator from '../../components/error-indicator';
import CosmeticsList from '../../components/cosmetics-list';
import CartTable from '../../components/cart-table';
import cosmeticsModel from '../../common/models/cosmeticsModel';

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCosmetics();
    }

    render () {
        const {
            cosmetics,
            loading,
            error,
            items,
            orderTotal,
            onDelete,
            onIncrease,
            onDecrease
        } = this.props;

        const cosmeticsData = cosmeticsModel(cosmetics);

        if (loading) {
            return (
                <Preloader />
            )
        }

        if (error) {
            return (
                <ErrorIndicator />
            )
        }

        return (
            <>
                <CosmeticsList cosmetics={cosmeticsData} />
                <CartTable
                    items={items}
                    orderTotal={orderTotal}
                    onDelete={onDelete}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            </>
        );
    }
}

export default HomePage;
