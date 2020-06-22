import CartTable from './component';

import { connect } from 'react-redux';

const mapStateToProps = ({ cartItems, total }) => {
    return {
        items: cartItems,
        total
    };
};

export default connect(mapStateToProps, null)(CartTable);
