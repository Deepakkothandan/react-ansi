import update from 'immutability-helper';

export const phpInitialState = {
  version: 5.5,
};

function phpReducer(state = phpInitialState, action) {
  switch (action.type) {
    case 'SET_PHP_VERSION':
      console.log(action.php.version);
      return update(state, {
        version: {
          $set: action.php.version,
        },
      });
    default:
      return state;
  }
}

export default phpReducer;
