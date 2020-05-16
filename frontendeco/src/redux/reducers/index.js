const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        // LOGIN
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: undefined
            }
        case 'PRODUCTS_ALL':
            return {
                ...state,
                products: action.payload
            }
        case 'SEARCH_RESULT':
            return {
                ...state,
                result: action.payload
                }
        case 'SEARCH_NAME':
            return {
                ...state,
                productSearchResult: action.payload
            }
        // ADD CART
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'EMPTY_CART':
            return {
                ...state,
                cart: []
                }
        case 'CLEAR_ONE_PRODUCT':
            return {
                ...state,
                cart: action.payload
                }
        case 'COMPRAR':
            return {
                ...state,
                compra: action.payload
            }
        case 'PRODUCT_CESTA':
            return {
                ...state,
                productCesta: action.payload
            }
        case 'PRODUCT_VALUE':
            return {
                ...state,
                productValue: action.payload
            }

        case "ADD_CANT_CART":
            return {
                ...state,
                cart:  state.cart.map((article) =>                   
                article._id === action.payload
                ?  {...article, unit: article.unit + 1}
                :article,
                ),
                };

        case "SUB_CANT_CART":
            return {
                ...state,
                cart:  state.cart.map((article) =>                   
                article._id === action.payload
                ?  {...article, unit: article.unit - 1}
                :article,
                ),
                };

        default:
            return state;
    }
};

export default reducer;