export const vagrant = {
  os: 'ubuntu',
  ip: '127.0.0.1',
  sp: './',
  name: 'ansible',
  memory: 512,
};

function vagrantReducer(state = vagrant, action) {
  switch (action.type) {
    case 'UPDATE_VAGRANT':
      // return action.updateVagrantState;
      console.log(action);
      break;
    default:
      return state;
  }
  return state;
}

export default vagrantReducer;

