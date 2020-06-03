const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COSMETICS':
            return {
                cosmetics: ['shampoo', 'cream']
            };

        default: return state;
    }
};

export default reducer;
