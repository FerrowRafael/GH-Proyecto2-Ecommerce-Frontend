const reducer = (state = {nombres: "", cart: []}, action) => {
    switch (action.type) {
        // LOGIN
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'PRODUCTS_ALL':
            return {
                ...state,
                product: action.payload
            }
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
                }
        case 'SEARCH_NAME':
            return {
                ...state,
                productSearchResult: action.payload
            }
        default:
            return state;
    }
};

export default reducer;