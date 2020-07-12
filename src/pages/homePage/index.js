import HomePage from './component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withCosmeticsStoreService from '../../components/hoc/withCosmeticsStoreSrvice';
import { addCartItem, decreaseCartItem, deleteCartItems, fetchCosmetics } from '../../actions/cosmeticsActions';
import utils from '../../common/utils';

const mapStateToProps = ({ cosmeticsList: { cosmetics, loading, error },
        shoppingCart: { cartItems, orderTotal }}) => {
    return {
        cosmetics,
        loading,
        error,
        items: cartItems,
        orderTotal
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { cosmeticsStoreService } = ownProps;

    return bindActionCreators({
        fetchCosmetics: fetchCosmetics(cosmeticsStoreService),
        onIncrease: addCartItem,
        onDecrease: decreaseCartItem,
        onDelete: deleteCartItems
    }, dispatch)

};

export default utils.compose(
    withCosmeticsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(HomePage)
