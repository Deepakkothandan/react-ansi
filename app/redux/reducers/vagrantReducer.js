import update from 'immutability-helper';

export const initialVagrantState = {
  os: 'ubuntu/trusty64',
  ip: '192.168.10.10',
  sharedpath: './',
  hostname: 'ansi',
  memory: 512,
};

function vagrantReducer(state = initialVagrantState, action) {
  switch (action.type) {
    case 'SET_OS':
      // console.log('action os is', action.os);
      return update(state, {
        os: {
          $set: action.os.os,
        },
      });
    case 'SET_HOSTNAME':
      // console.log('state is', state);
      return { ...state, hostname: action.hostname.hostname };
    case 'SET_SHAREDPATH':
      // console.log('action os is', action.os);
      return update(state, {
        sharedpath: {
          $set: action.sharedpath.sharedpath,
        },
      });
    case 'SET_IP':
      // console.log('action os is', action.os);
      return update(state, {
        ip: {
          $set: action.ip.ip,
        },
      });
    case 'SET_MEMORY':
      // console.log('action os is', action.os);
      return update(state, {
        memory: {
          $set: action.memory.memory,
        },
      });
    default:
      return state;
  }
}

export default vagrantReducer;

