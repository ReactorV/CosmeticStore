const initialState = {
    cosmetics: 'Shampoo'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COSMETICS':
            return {
                ...state
            };

        default: return state;
    }
};

export default reducer;
