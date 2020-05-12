const reducer = (state = {}, action) => {
    switch (action.type) {
        // LOGIN
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'PRODUCTSALL':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};

export default reducer;