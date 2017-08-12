import axios from 'axios';
import newest from './newest.json';

const initialState = {
  user: {},
  cart: [],
  total: 0,
  loans: null,
  loading: true,
};

const GET_LENDER = "GET_LENDER";
const GET_LOANS = "GET_LOANS";
const ADD_TO_CART = "ADD_TO_CART";
const GET_CART = "GET_CART";

export default function reducer(state = initialState, action){
  switch(action.type) {
    case GET_LENDER + '_PENDING':
      return Object.assign({}, state, { loading: true });
    case GET_LENDER + '_FULFILLED':
      // console.log("Got User")
      return Object.assign({}, state, { loading: false, user: action.payload });
    // case GET_LOANS + '_PENDING':
    //   return Object.assign({}, state, {loading: true});
    // case GET_LOANS + '_FULFILLED':
    //   return Object.assign({}, state, { loans: action.payload })
    case GET_LOANS:
      return Object.assign({}, state, { loans: action.payload})
    case GET_CART:
      return Object.assign({}, state, { cart: action.payload })
    case ADD_TO_CART + '_FULFILLED':
      console.log(action.payload.data)
      return Object.assign({}, state, { cart: [action.payload.data] })
    default:
      return state;
  }
}

// Pull the user from the database 

export function getLender(){
  let promise = axios.get('/api/profile').then(res => res.data);
  console.log("Console line 44 reducer.js getLender:", promise);
  return {
    type: GET_LENDER,
    payload: promise
  }
}

// Retreives the newest Loans from Kiva
// **Implement pushing to backend

export function getLoans(){
  // let promise = axios.get('http://api.kivaws.org/v1/loans/newest.json').then(res => res.data)
  // console.log(promise);
  let promise = newest;
  return {
    type: GET_LOANS,
    payload: promise
  }
}

export function getCart(){
  return {
    type: GET_CART,
    payload: []
  }
}

export function addToCart( project ) {
  return {
    type: ADD_TO_CART,
    payload: axios.post('/api/checkout/', project )
  }
}