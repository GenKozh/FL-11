let a,b,c;

a = +prompt('Please enter the length of first side');
b = +prompt('Please enter the length of second side');
c = +prompt('Please enter the length of third side');

if ( a > b + c || b > a + c || c > a + b) {
  console.log('Triangle doesn\'t exist');
} else {
  if ( a === b && b === c && a === c) {
    console.log('Eequivalent triangle');
  } else {
    if ( a === b || b === c || a === c) {
      console.log('Isosceles triangle');
    } else {
      console.log('Normal triangle');
    }
  }
}



