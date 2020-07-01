const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
    cartItems: [],
    total: 120
};

const updateCartItem = () => {

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COSMETICS_REQUEST':
            return {
                ...state,
                cosmetics: [],
                loading: true,
                error: null,
            };

        case 'FETCH_COSMETICS_SUCCESS':
            return {
                ...state,
                cosmetics: action.cosmetics,
                loading: false,
                error: null,
            };

        case 'FETCH_COSMETICS_ERROR':
            return {
                ...state,
                cosmetics: [],
                loading: false,
                error: action.error
            };

        case 'ADD_CART_ITEM':
            const itemId = action.itemId;
            const item = state.cosmetics.find(item => item.id === itemId);
            const cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === itemId);

            let cartItem = state.cartItems.find(cartItem => cartItem.id === itemId);
            let cartItemsAdded;

            if (cartItem) {
                const totalPriceItem = Number(cartItem.price) + Number(item.price);

                cartItem.count = cartItem.count + 1;
                cartItem.price = totalPriceItem.toFixed(2);

                cartItemsAdded = [
                    ...state.cartItems.slice(0, cartItemIndex),
                    cartItem,
                    ...state.cartItems.slice(cartItemIndex + 1)
                ];
            } else {
                const newItem = {
                    id: item.id,
                    name: item.brand,
                    price: item.price,
                    count: 1
                };

                cartItemsAdded = [...state.cartItems, newItem];
            }

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: cartItemsAdded
            };

        case 'DECREASE_CART_ITEM':
            const decreasedItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.itemId);
            const decreasedItem = state.cartItems.find(cartItem => cartItem.id === action.itemId);
            let newCartItems;

            if (decreasedItem.count > 1) {
                const item = state.cosmetics.find(item => item.id === action.itemId);

                decreasedItem.count = decreasedItem.count - 1;
                decreasedItem.price = (decreasedItem.price - item.price).toFixed(2);

                newCartItems = [
                    ...state.cartItems.slice(0, decreasedItemIndex),
                    decreasedItem,
                    ...state.cartItems.slice(decreasedItemIndex + 1),
                ]
            } else {
                newCartItems = [
                    ...state.cartItems.slice(0, decreasedItemIndex),
                    ...state.cartItems.slice(decreasedItemIndex + 1),
                ]
            }

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: newCartItems
            };

        case 'DELETE_CART_ITEMS':
            const deletedItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.itemId);

            const updatedCartItems = [
                ...state.cartItems.slice(0, deletedItemIndex),
                ...state.cartItems.slice(deletedItemIndex + 1),
            ];

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: updatedCartItems
            };

        default: return state;
    }
};

export default reducer;
