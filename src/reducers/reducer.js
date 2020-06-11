const initialState = {
    cosmetics: [],
    error: false,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COSMETICS_REQUEST':
            return {
                cosmetics: [],
                loading: true
            };

        case 'FETCH_COSMETICS_SUCCESS':
            return {
                cosmetics: action.cosmetics,
                loading: false
            };

        case 'FETCH_COSMETICS_ERROR':
            return {
                cosmetics: [],
                loading: false,
                error: true
            };

        default: return state;
    }
};

export default reducer;
