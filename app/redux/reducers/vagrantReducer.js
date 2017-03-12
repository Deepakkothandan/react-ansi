import update from 'immutability-helper';

export const initialState = {
  os: 'ubuntu',
  ip: '127.0.0.1',
  sp: './',
  name: 'ansible',
  memory: 512,
};

function vagrantReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_VAGRANT':
      console.log('State is', state);
      return update(state, {
        vagrant: {
          $set: action.vagrant,
        },
      });
    case 'SET_OS':
      // console.log('action os is', action.os);
      return update(state, {
        os: {
          $set: action.os.os,
        },
      });
    case 'SET_HOSTNAME':
      // console.log('state is', state);
      return { ...state, name: action.name.name };
    default:
      return state;
  }
}

export default vagrantReducer;

