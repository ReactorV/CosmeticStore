const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
    cartItems: [],
    total: 120
};

const reducer = (state = initialState, action) => {
    console.log(action.type);

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

            const newItem = {
                id: item.id,
                name: item.brand,
                price: item.price,
                count: 1
            };

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
                cartItem = newItem;
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
            const newCartItems = state.cartItems;

            if (decreasedItem.count > 1) {
                const item = state.cosmetics.find(item => item.id === action.itemId);
                debugger
                decreasedItem.count = decreasedItem.count - 1;
                decreasedItem.price = decreasedItem.price - item.price;

                newCartItems.splice(decreasedItemIndex, 1, decreasedItem);
            } else {
                newCartItems.splice(decreasedItemIndex, 1);
            }

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: newCartItems
            };

        default: return state;
    }
};

export default reducer;
