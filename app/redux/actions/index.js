function setOs(os) {
  return {
    type: 'SET_OS',
    os,
  };
}

function setHostName(hostname) {
  return {
    type: 'SET_HOSTNAME',
    hostname,
  };
}

function setSharedPath(sharedpath) {
  return {
    type: 'SET_SHAREDPATH',
    sharedpath,
  };
}

function setIp(ip) {
  return {
    type: 'SET_IP',
    ip,
  };
}

function setMemory(memory) {
  return {
    type: 'SET_MEMORY',
    memory,
  };
}

function updatePackages(packages) {
  return {
    type: 'UPDATE_PACKAGES',
    packages,
  };
}

function setPhpVersion(php) {
  // console.log('action is', php);
  return {
    type: 'SET_PHP_VERSION',
    php,
  };
}

export {
  updatePackages,
  setOs,
  setHostName,
  setSharedPath,
  setMemory,
  setIp,
  setPhpVersion,
};
