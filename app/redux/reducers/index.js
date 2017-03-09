import { combineReducers } from 'redux';
import vagrantReducer from './vagrantReducer';

const rootReducer = combineReducers({
  vagrant: vagrantReducer,
});

export default rootReducer;
