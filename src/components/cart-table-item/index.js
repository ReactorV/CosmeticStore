import CartTableItem from './component';

import { connect } from 'react-redux';

const mapStateToProps = ({ onIncrease, onDecrease, onDelete }) => {
    return {
        onIncrease,
        onDecrease,
        onDelete
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`onIncrease ${id}`)
        },
        onDecrease: (id) => {
            console.log(`onDecrease ${id}`)
        },
        onDelete: (id) => {
            console.log(`onDelete ${id}`)
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTableItem);
