// combined reducer

//EXAMPLE
// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import exampleReducer from './exampleReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  exampleReducer: exampleReducer,
});
// Exports
export default rootReducer;