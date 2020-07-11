import CartHeader from './component';

import { connect } from 'react-redux';

const mapStateToProps = ({ shoppingCart: { orderTotal, numItems }}) => {
    return {
        orderTotal,
        numItems
    }
};

export default connect(mapStateToProps, null)(CartHeader);
