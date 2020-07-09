import HomePage from './component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withCosmeticsStoreService from '../../components/hoc/withCosmeticsStoreSrvice';
import { fetchCosmetics } from '../../actions/cosmeticsActions';
import utils from '../../common/utils';

const mapStateToProps = ({ cosmeticsList: { cosmetics, loading, error }}) => {
    return {
        cosmetics,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { cosmeticsStoreService } = ownProps;

    return bindActionCreators({
        fetchCosmetics: fetchCosmetics(cosmeticsStoreService)
    }, dispatch)

};

export default utils.compose(
    withCosmeticsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(HomePage)
