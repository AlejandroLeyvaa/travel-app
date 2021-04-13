function state(data) {
  const state = data;

  console.log('State', state);

  return function () {
    return state;
  };
}

export default state;
