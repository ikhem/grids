import axios from 'axios';
import newest from './newest.json';

const GET_USER = "GET_USER";
const GET_LOANS = "GET_LOANS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART = "UPDATE_CART";
const CHECK_OUT = "CHECK_OUT";
const LOGGED_OUT = "LOGGED_OUT";
const SIGN_OUT = "SIGN_OUT";

export default function reducer(state, action){
  switch(action.type){
    case GET_USER + '_PENDING':
      return state;
    case GET_USER + '_FULFILLED':
      console.log("User going into state: ", action.payload.data);
      return Object.assign({}, state, { user: action.payload.data });
    // case GET_LOANS + '_PENDING':
    //   return state
    // case GET_LOANS + '_FULFILLED':
    //   console.log("Fulfilled", action.payload.loans)
    //   return state;
      // return Object.assign({}, state, { loans: action. payload });
    case GET_LOANS:
      return Object.assign({}, state, { loans: action.payload });
    case ADD_TO_CART:
      // console.log("Action Payload: ", action.payload);
      // console.log("payload.loan:", action.payload.loan);
      // console.log("payload.total:", action.payload.amount);
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
      return Object.assign({}, state, { cart: state.cart.filter(item =>{
        return item.loan.id != action.payload
      })})
    case UPDATE_CART:
      console.log("id:", action.payload.id)
      console.log("amount:", action.payload.amount)
      let newCart = state.cart.map(item =>{
        if(item.loan.id === action.payload.id){
          item.amount = action.payload.amount
        }
        return item
      })
      console.log("New Cart: ", newCart)
      return Object.assign({}, state, { cart: newCart });
    case SIGN_OUT + '_FULFILLED':
      // localStorage.clear();
      return Object.assign({}, state, {});
      case CHECK_OUT + '_PENDING':
        return state;
      case CHECK_OUT + '_FULFILLED':  
        return Object.assign({}, state, { cart: []} )
      case LOGGED_OUT:
        return Object.assign({}, state, { user: action.payload, cart: [] })
    default:
      return state;
  }
}

export function getUser(){
  let promise = axios.get('/api/portfolio')
  return{
    type: GET_USER,
    payload: promise
  }
}

export function getLoans(){
  // let promise = axios.get('https://api.kivaws.org/v1/loans/newest.json').then(res => axios.post('/api/populateLoans', res.data.loans))
  // console.log("Loans: ", promise)
  let promise = newest;
  return {
    type: GET_LOANS,
    payload: axios.post('/api/populateLoans', promise)
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
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export function updateCart( id, amount ){
  console.log("A: ", amount)
  return {
    type: UPDATE_CART,
    payload: { id, amount }
  }
}

export function signOut(){
  console.log("logout");
  let promise = axios.get('/api/signout')
  return{
    type: SIGN_OUT,
    payload: promise
  }
}

export function checkOut( cart ){
  console.log("State.Cart", cart)
  return {
    type: CHECK_OUT,
    payload: axios.post('/api/checkout', cart)
  }
}

export function loggedOut(){
  return {
    type: LOGGED_OUT,
    payload: {}
  }
}