import updateCosmeticsList from './cosmetics-list';
import updateCartTable from './cart-table';

const reducer = (state, action) => {
    return {
        cosmeticsList: updateCosmeticsList(state, action),
        shoppingCart: updateCartTable(state, action)
    };
};

export default reducer;
