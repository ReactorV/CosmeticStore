const initialState = {
    cosmetics: [],
    loading: false,
    error: null,
    cartItems: [],
    total: 0
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

    if (index !== -1) {
        return [
            ...cartItems.slice(0, index),
            item,
            ...cartItems.slice(index + 1)
        ];
    } else {
        return [...cartItems, item];
    }
};

const updateOrder = (state, id, quantity) => {
    const { cartItems, cosmetics } = state;

    const item = cosmetics.find(item => item.id === id);
    const cartItem = cartItems.find(cartItem => cartItem.id === id) || {};
    const cartItemIndex = cartItems.findIndex(cartItem => cartItem.id === id);

    const newCartItem = updateCartItem(item, cartItem, quantity);
    const newCartItems = updateCartItems(cartItems, newCartItem, cartItemIndex);

    return {
        ...state,
        cartItems: newCartItems
    };
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
            return updateOrder(state, action.itemId, 1);

        case 'DECREASE_CART_ITEM':
            return updateOrder(state, action.itemId, -1);

        case 'DELETE_CART_ITEMS':
            const deletedCartItem = state.cartItems.find(cartItem => cartItem.id === action.itemId);

            return updateOrder(state, action.itemId, -deletedCartItem.count);

        default: return state;
    }
};

export default reducer;
