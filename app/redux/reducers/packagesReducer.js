import update from 'immutability-helper';

export const packages = {
  tools: ['vim', 'git'],
};

function packagesReducer(state = packages, action) {
  switch (action.type) {
    case 'UPDATE_PACKAGES':
      // return action.updateVagrantState;
      // console.log(action);
      console.log(state);
      return update(state, {
        tools: {
          $set: action.packages,
        },
      });
    default:
      return state;
  }
}

export default packagesReducer;

