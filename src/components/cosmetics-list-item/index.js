import CosmeticsListItem from './component';

import { connect } from 'react-redux';

import { addCartItem } from '../../actions/cosmeticsActions';

const mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps, null)(CosmeticsListItem);
