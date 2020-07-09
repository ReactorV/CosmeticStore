import CosmeticsList from './component';

import { connect } from 'react-redux';

import { addCartItem } from '../../actions/cosmeticsActions';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedCartItem: (id) => dispatch(addCartItem(id))
    }
};

export default connect(null, mapDispatchToProps)(CosmeticsList);
