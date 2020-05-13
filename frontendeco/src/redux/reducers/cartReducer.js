const cartReducer = (state = {cart: []}, action) => {
    switch (action.type) {
        // ADD CART
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
                }
        default:
            return state;
    }
};

export default cartReducer;