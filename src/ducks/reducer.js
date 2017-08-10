import axios from 'axios';

const initialState = {
  user: {},
  loans: {},
  loading: true
};

const GET_LENDER = "GET_LENDER";

export default function reducer(state = initialState, action){
  switch(action.type) {
    case GET_LENDER + '_PENDING':
      return Object.assign({}, state, {loading: true});
    case GET_LENDER + '_FULFILLED':
      console.log("Got User")
      return Object.assign({}, state, {loading: false, user: action.payload});
    default:
      return state;
  }
}

export function getLender(){
  let promise = axios.get('/api/Profile').then(res => res.data);
  console.log(promise);
  return {
    type: GET_LENDER,
    payload: promise
  }
}
