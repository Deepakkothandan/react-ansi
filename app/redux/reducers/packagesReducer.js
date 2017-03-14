import update from 'immutability-helper';

export const packages = [];

function packagesReducer(state = packages, action) {
  switch (action.type) {
    case 'UPDATE_PACKAGES':
      // console.log(action);
      // console.log(state);
      return update(packages, { $push: action.packages.val });
    default:
      return state;
  }
}

export default packagesReducer;
