const initialState = {
    cosmeticsList: {
        cosmetics: [],
        loading: false,
        error: null,
    },
    shoppingCart: {
        cartItems: [],
        total: 0
    }
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
    const { shoppingCart: { cartItems }, cosmeticsList: { cosmetics }} = state;

    const item = cosmetics.find(item => item.id === id);
    const cartItem = cartItems.find(cartItem => cartItem.id === id) || {};
    const cartItemIndex = cartItems.findIndex(cartItem => cartItem.id === id);

    const newCartItem = updateCartItem(item, cartItem, quantity);
    const newCartItems = updateCartItems(cartItems, newCartItem, cartItemIndex);

    return {
        orderTotal: 0,
        cartItems: newCartItems
    };
};

const updateCosmeticsList = (state, action) => {
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

const updateCartTable = (state, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return updateOrder(state, action.itemId, 1);

        case 'DECREASE_CART_ITEM':
            return updateOrder(state, action.itemId, -1);

        case 'DELETE_CART_ITEMS':
            const deletedCartItem = state.shoppingCart.cartItems.find(cartItem => cartItem.id === action.itemId);

            return updateOrder(state, action.itemId, -deletedCartItem.count);

        default: return state;
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COSMETICS_REQUEST':
        case 'FETCH_COSMETICS_SUCCESS':
        case 'FETCH_COSMETICS_ERROR':
            return {
                ...state,
                cosmeticsList: updateCosmeticsList(state, action),
            };

        case 'ADD_CART_ITEM':
        case 'DECREASE_CART_ITEM':
        case 'DELETE_CART_ITEMS':
            return {
                ...state,
                shoppingCart: updateCartTable(state, action)
            };

        default: return state;
    }
};

export default reducer;
