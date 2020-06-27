import CartTable from './component';

import { connect } from 'react-redux';

import { addCartItem, decreaseCartItem } from '../../actions/cosmeticsActions';

const mapStateToProps = ({ cartItems, total, onIncrease, onDecrease, onDelete }) => {
    debugger
    return {
        items: cartItems,
        total,
        onIncrease,
        onDecrease,
        onDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(addCartItem(id)),
        onDecrease: (id) => dispatch(decreaseCartItem(id)),
        onDelete: (id) => {
            console.log(`onDelete ${id}`)
        },

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
