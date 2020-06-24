import CosmeticsList from './component';

import { connect } from 'react-redux';

import { addCartItem } from '../../actions/cosmeticsActions';

const mapStateToProps = (onIncrease) => {
    return {
        onIncrease
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(addCartItem(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CosmeticsList);
