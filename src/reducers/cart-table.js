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

    const totalOrderSum = newCartItems.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);
    const numItems = newCartItems.reduce((count, item) => count + item.count, 0);

    return {
        orderTotal: totalOrderSum,
        cartItems: newCartItems,
        numItems
    };
};

const updateCartTable = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            numItems: 0
        }
    }

    switch (action.type) {
        case 'ADD_CART_ITEM':
            return updateOrder(state, action.itemId, 1);

        case 'DECREASE_CART_ITEM':
            return updateOrder(state, action.itemId, -1);

        case 'DELETE_CART_ITEMS':
            const deletedCartItem = state.shoppingCart.cartItems.find(cartItem => cartItem.id === action.itemId);

            return updateOrder(state, action.itemId, -deletedCartItem.count);

        default: return state.shoppingCart;
    }
};

export default updateCartTable;
