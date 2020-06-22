const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
    cartItems: [
        {
            id: 11,
            name: 'maybelline',
            price: 10,
            count: 1
        },
        {
            id: 12,
            name: 'maybelline',
            price: 12,
            count: 2
        }
    ],
    total: 120
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
