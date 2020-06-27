import CartTable from './component';

import { connect } from 'react-redux';

import { addCartItem } from '../../actions/cosmeticsActions';

const mapStateToProps = ({ cartItems, total }) => {
    return {
        items: cartItems,
        total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(addCartItem(id)),
        onDecrease: (id) => {
            console.log(`onDecrease ${id}`)
        },
        onDelete: (id) => {
            console.log(`onDelete ${id}`)
        },

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
