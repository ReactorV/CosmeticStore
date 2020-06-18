const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
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

        default: return state;
    }
};

export default reducer;
