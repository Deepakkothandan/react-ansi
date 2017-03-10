import { combineReducers } from 'redux';
import vagrantReducer from './vagrantReducer';
import packagesReducer from './packagesReducer';

const rootReducer = combineReducers({
  vagrant: vagrantReducer,
  packages: packagesReducer,
});

export default rootReducer;
