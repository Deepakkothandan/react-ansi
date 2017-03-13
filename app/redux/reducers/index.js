import { combineReducers } from 'redux';
import vagrantReducer from './vagrantReducer';
import packagesReducer from './packagesReducer';
import phpReducer from './phpReducer';

const rootReducer = combineReducers({
  vagrant: vagrantReducer,
  packages: packagesReducer,
  php: phpReducer,
});

export default rootReducer;
