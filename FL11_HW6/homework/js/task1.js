let a1, a2, b1, b2, c1, c2; 
const MEAN_NUMBER = 2;

a1 = +prompt('Please inter a1 value:');
a2 = +prompt('Please inter a2 value:');
b1 = +prompt('Please inter b1 value:');
b2 = +prompt('Please inter b2 value:');
c1 = +prompt('Please inter c1 value:');
c2 = +prompt('Please inter c2 value:');

if ((a1 + b1)/MEAN_NUMBER === c1 && (a2 + b2)/MEAN_NUMBER === c2) {
  console.log(true);
} else {
  console.log(false);
}
