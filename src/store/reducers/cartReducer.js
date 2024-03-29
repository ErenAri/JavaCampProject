import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";


const initalState={
    cartItems:cartItems
}

export default function cartReducer(state=initalState, {type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product===payload.id)
            if (product) {
                product.quantity++;
                return{
                    ...state
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,payload]
                }
            }

            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(c=>c.product.id===payload.id)
                }
            
    
        default:
            break;
    }
}