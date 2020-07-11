const updateCosmeticsList = (state, action) => {
    if (state === undefined) {
        return {
            cosmetics: [],
            loading: false,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_COSMETICS_REQUEST':
            return {
                cosmetics: [],
                loading: true,
                error: null,
            };

        case 'FETCH_COSMETICS_SUCCESS':
            return {
                cosmetics: action.cosmetics,
                loading: false,
                error: null,
            };

        case 'FETCH_COSMETICS_ERROR':
            return {
                cosmetics: [],
                loading: false,
                error: action.error
            };

        default: return state.cosmeticsList;
    }
};

export default updateCosmeticsList;
