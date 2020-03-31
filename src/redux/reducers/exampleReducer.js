import produce from 'immer';

// Initial State
export const initialState = {
  testing: false,
};
// Reducers (Modifies The State And Returns A New State)
const exampleReducer = (previousState = initialState, action) => {
  return produce(previousState, newState => {
    switch (action.type) {
      // Start test
      case 'TESTING_STARTED': {
        newState.testing = true;
        return newState;
      }
      // Stop test
      case 'TESTING_STOPPED': {
        newState.testing = false;
        return newState;
      }
      // Default
      default: {
        return previousState;
      }
    }
  });
  
};
// Exports
export default exampleReducer;
