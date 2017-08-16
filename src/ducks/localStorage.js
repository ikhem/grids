export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    console.log("SerializedState: ", serializedState);
    if (serializedState === null) {
      return {
        user: {},
        cart: [],
        total: [],
        loans: null
      };
    }
    console.log("JSON.parse:", JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    return {error: 'error'};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err){
    //Ignore errors
  }
}