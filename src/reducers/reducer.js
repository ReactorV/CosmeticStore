const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
    cartItems: [],
    total: 120
};

const updateCartItem = (item, cartItem, quantity) => {
    const {
        id = item.id,
        name = item.name,
        price = 0,
        count = 0
    } = cartItem;

    const totalPrice = Number(price) + Number(item.price) * quantity;

    return {
        id,
        name,
        price: totalPrice.toFixed(2),
        count: count + quantity
    }
};

const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ];
    }

    if (item) {
        return [
            ...cartItems.slice(0, index),
            item,
            ...cartItems.slice(index + 1)
        ];
    } else {
        return [...cartItems, item];
    }
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
            const cartItem = state.cartItems.find(cartItem => cartItem.id === itemId) || {};
            const cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === itemId);

            const addedCartItem = updateCartItem(item, cartItem, 1);
            const addedCartItems = updateCartItems(state.cartItems, addedCartItem, cartItemIndex);

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: addedCartItems
            };

        case 'DECREASE_CART_ITEM':
            const cosmeticItem = state.cosmetics.find(item => item.id === action.itemId);
            const decreasedItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.itemId);
            const decreasedItem = state.cartItems.find(cartItem => cartItem.id === action.itemId);

            const decreasedCartItem = updateCartItem(cosmeticItem, decreasedItem, -1);
            const decreasedCartItems = updateCartItems(state.cartItems, decreasedCartItem, decreasedItemIndex);

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: decreasedCartItems
            };

        case 'DELETE_CART_ITEMS':
            const deletedCartItem = state.cartItems.find(cartItem => cartItem.id === action.itemId);
            const deletedCartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.itemId);

            deletedCartItem.count = 0;

            const deletedCartItems = updateCartItems(state.cartItems, deletedCartItem, deletedCartItemIndex);

            return {
                ...state,
                loading: false,
                error: action.error,
                cartItems: deletedCartItems
            };

        default: return state;
    }
};

export default reducer;
