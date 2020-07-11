import CartTable from './component';

import { connect } from 'react-redux';

import { addCartItem, decreaseCartItem, deleteCartItems } from '../../actions/cosmeticsActions';

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        orderTotal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(addCartItem(id)),
        onDecrease: (id) => dispatch(decreaseCartItem(id)),
        onDelete: (id) => dispatch(deleteCartItems(id))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
