import axios from 'axios';
import newest from './newest.json';

const initialState = {
  user: {
    cart: [],
    total: 0
  },
  // cart: [],
  total: 0,
  loans: null,
  loading: true,
};

const GET_USER = "GET_LENDER";
const GET_LOANS = "GET_LOANS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const FUND_LOAN = "FUND_LOAN";

export default function reducer(state = initialState, action){
  switch(action.type) {
    case GET_USER + '_PENDING':
      return Object.assign({}, state, { loading: true });
    case GET_USER + '_FULFILLED':
      console.log("GET_LENDER: ", action.payload)
      return Object.assign({}, state, { loading: false, user: action.payload });
    // case GET_LOANS + '_PENDING':
    //   return Object.assign({}, state, {loading: true});
    // case GET_LOANS + '_FULFILLED':
    //   console.log("GET_LOANS_REDUCER: ", action.payload);
    //   return Object.assign({}, state, { loans: action.payload })
    case GET_LOANS:
      return Object.assign({}, state, { loans: action.payload})
    case ADD_TO_CART + '_PENDING':
      return Object.assign({}, state, { loading: true })
    case ADD_TO_CART + '_FULFILLED':
      return Object.assign({}, state, { user: action.payload.data, total: state.total+= 25 });
    case REMOVE_FROM_CART + '_PENDING':
      return Object.assign({}, state, { loading: true })
    case REMOVE_FROM_CART + '_FULFILLED':
      console.log("Cart back from server:", action.payload)
      return Object.assign({}, state, { user: action.payload.data });
    case FUND_LOAN:
      console.log("Id to fund:", action.payload.id)
      console.log("amount to fund:", action.payload.amount)
      console.log("user state cart: ", state.user.cart)
      let loan = state.user.cart.map(loan => {
        if(loan.id === action.payload.id){
          loan.funded_amount = action.payload.amount
        }
        return loan
      });
      console.log("Loan:", loan);
      return Object.assign({}, state, {user:{cart:loan}})
    default:
      return state;
  }
}

// Pull the user from the database 

export function getLender(){
  let promise = axios.get('/api/profile').then(res => res.data);
  // console.log("Console line 44 reducer.js getLender:", promise);
  return {
    type: GET_USER,
    payload: promise
  }
}

// Retreives the newest Loans from Kiva
// **Implement pushing to backend

export function getLoans(){
  // let promise = axios.get('http://api.kivaws.org/v1/loans/newest.json').then(res => res.data)
  let promise = newest;
  return {
    type: GET_LOANS,
    payload: promise
  }
}

export function addToCart( project ) {
  return {
    type: ADD_TO_CART,
    // payload: axios.post('/api/AddToCart/', project )
    payload: axios.post('/api/cart', project )
  }
}

export function removeFromCart( id ) {
  console.log("ID to remove:", id);
  return {
    type: REMOVE_FROM_CART,
    // payload: axios.post('/api/RemoveFromCart/', project )
    payload: axios.delete(`/api/cart?id=${id}` )
  }
}

export function fundLoan( id, amount ) {
  return {
    type: FUND_LOAN,
    payload: { id, amount }
  }
}