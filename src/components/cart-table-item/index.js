import CartTableItem from './component';

import { connect } from 'react-redux';

const mapStateToProps = ({ onIncrease, onDecrease, onDelete }) => {
    return {
        onIncrease,
        onDecrease,
        onDelete
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return {

    }
};*/

export default connect(mapStateToProps, null)(CartTableItem);
