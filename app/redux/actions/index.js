export default function updateVagrant(vagrant) {
  // console.log('vagrant object', vagrant);
  return {
    type: 'UPDATE_VAGRANT',
    payload: vagrant,
  };
}
