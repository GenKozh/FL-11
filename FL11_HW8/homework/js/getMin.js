function getMin() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (result > arguments[i]) {
      result = arguments[i];
    }
  }
  return result;
}

getMin(3, 0, -3);
