import axios from 'axios';
import newest from './newest.json';

const initialState = {
  user: {},
  loans: null,
  loading: true
};

const GET_LENDER = "GET_LENDER";
const GET_LOANS = "GET_LOANS";

export default function reducer(state = initialState, action){
  switch(action.type) {
    case GET_LENDER + '_PENDING':
      return Object.assign({}, state, {loading: true});
    case GET_LENDER + '_FULFILLED':
      // console.log("Got User")
      return Object.assign({}, state, {loading: false, user: action.payload});
    // case GET_LOANS + '_PENDING':
    //   return Object.assign({}, state, {loading: true});
    case GET_LOANS:
      return Object.assign({}, state, { loans: action.payload})
    default:
      return state;
  }
}

// Pull the user from the database 

export function getLender(){
  let promise = axios.get('/api/Profile').then(res => res.data);
  // console.log(promise);
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
  console.log(promise.loans);
  return {
    type: GET_LOANS,
    payload: promise
  }
}
