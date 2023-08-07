import { createSlice} from '@reduxjs/toolkit'
import AllApis from '../Allmobiles/AllApis'
const initialState = {
    cart:[],
    admincart:[],
    items :AllApis,
    totalPrice:0,
    totalQuantity:0,
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

            const Find = state.cart.findIndex((index)=>index.model == action.payload.model)
            if(Find>=0){
                state.cart[Find].quantity++;
            }
            else{
                state.cart.push(action.payload)
                
            }
        },
        PlusItems:(state,action)=>{
            state.cart = state.cart.map((i)=>{
                if(i.model === action.payload){
                    return {...i,quantity:i.quantity+1}
                }
                return i;
            })
        },
        MinusItems:(state,action)=>{
            state.cart = state.cart.map((i)=>{
                if(i.model === action.payload){
                    return{...i,quantity:i.quantity-1}
                }
                return i;
            })
        },
        getCart:(state)=>{
            let {totalQuantity,totalPrice} = state.cart.reduce(
              (cartTotal,cartItem)=>{
                  const {price,quantity} = cartItem;
                  const itemTotal = price * quantity;
                  cartTotal.totalPrice += itemTotal
                  cartTotal.totalQuantity += quantity
                  return cartTotal;
              },
              {
                  totalPrice:0,
                  totalQuantity:0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(0))
            state.totalQuantity = totalQuantity;
          },
          Removeitems:(state,action)=>{
            state.cart = state.cart.filter((i)=>i.model !== action.payload)
          },
          AdminCart:(state,action)=>{
            state.admincart.push(action.payload)
          }
        }
})
export const {addToCart,  getCart,Removeitems,PlusItems,MinusItems,AdminCart } = cartSlice.actions
export default cartSlice.reducer