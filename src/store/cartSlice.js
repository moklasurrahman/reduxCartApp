import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
        name: 'cart',
        initialState : {
            cartList: [],
            total: 0
        },
        reducers: {
            add(state, actione){
             const updatedCartList = state.cartList.concat(actione.payload);
             const total = state.total + actione.payload.price;
             return {...state, total: total, cartList: updatedCartList};
            },
            remove(state, actione){
                const deletCartList = state.cartList.filter(item => item.id !== actione.payload.id);
                const total = state.total - actione.payload.price;
                return {...state, total: total, cartList: deletCartList};
            }
        }
    }
)


export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;