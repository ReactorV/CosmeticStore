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
        const { cosmetics, loading, error } = this.props;

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
                <CartTable />
            </>
        );

    }
}

export default HomePage;
