function isInteger(a) {
  if (a - Math.round(a)) {
    return false;
  } else {
    return true;
  }
}

isInteger(5);
isInteger(5.1);
