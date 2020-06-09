import React from 'react';

import CosmeticsList from '../../components/cosmetics-list';
//import CartTable from '../../components/cart-table';
import cosmeticsModel from '../../common/models/cosmeticsModel';

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCosmetics();
    }

    render () {
        const { cosmetics } = this.props;

        const cosmeticsData = cosmeticsModel(cosmetics);

        return(
            <CosmeticsList cosmetics={cosmeticsData} />
        );

    }
}

export default HomePage;
