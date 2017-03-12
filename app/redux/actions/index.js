export default function updateVagrant(vagrant) {
  return {
    type: 'UPDATE_VAGRANT',
    vagrant,
  };
}

function setOs(os) {
  return {
    type: 'SET_OS',
    os,
  };
}

function setHostName(name) {
  return {
    type: 'SET_HOSTNAME',
    name,
  };
}

function updatePackages(packages) {
  return {
    type: 'UPDATE_PACKAGES',
    packages,
  };
}

export { updatePackages, setOs, setHostName };
