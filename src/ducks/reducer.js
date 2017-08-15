import axios from 'axios';
import newest from './newest.json';

const GET_LENDER = "GET_LENDER";
const GET_LOANS = "GET_LOANS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export default function reducer(state, action){
  switch(action.type){
    case GET_LENDER + '_FULFILLED':
      return Object.assign({}, state, { user: action.payload })
    case GET_LOANS:
      return Object.assign({}, state, { loans: action.payload });
    case ADD_TO_CART:
      console.log("Action Payload: ", action.payload);
      console.log("payload.loan:", action.payload.loan);
      console.log("payload.total:", action.payload.amount);
      // let total = 0;
      // state.cart.map(item =>{
      //   total = state.total + item.amount
      // })
      // console.log("total:", total);
      // let amountToAdd = Number(state.total) + Number(action.payload.amount);
      // return Object.assign({}, state, { cart: [...state.cart, action.payload.loan], total: amountToAdd});
      return Object.assign({}, state, { cart: [...state.cart, action.payload]})
      // return state;
    case REMOVE_FROM_CART:
      let amountToSub = state.total - 25
      return Object.assign({}, state, { cart: state.cart.filter(item =>{
        return item.loan.id != action.payload
      }), total: amountToSub})
    default:
    console.log( 'default')
      return state;
  }
}

export function getLender(){
  let promise = axios.get('/api/profile')
  return{
    type: GET_LENDER,
    payload: promise
  }
}

export function getLoans(){
  let promise = newest;
  return {
    type: GET_LOANS,
    payload: promise
  }
}

export function addToCart( loan, amount ){
  console.log("addingToCart function:", loan)
  return {
    type: ADD_TO_CART,
    payload: { loan, amount }
  }
}

export function removeFromCart( id ){
  console.log("item to remove:", id)
  return{
    type: REMOVE_FROM_CART,
    payload: id
  }
}