const initialState = {
    cosmetics: ['Shampoo'],
    error: false
};

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'FETCH_COSMETICS_SUCCESS':
            return {
                cosmetics: action.cosmetics
            };

        case 'FETCH_COSMETICS_ERROR':
            return {
                ...state,
                error: action.error
            };

        default: return state;
    }
};

export default reducer;
