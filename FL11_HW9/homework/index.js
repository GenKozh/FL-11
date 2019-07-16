function getNumbers(str) {
  let arr = [];
  const numberNine = 9;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= numberNine) {
      arr.push(parseInt(str[i]));
    }
  }
  return arr;
}

function findTypes() {
  let arr = [];
  let out = {};
  for (let i = 0; i < arguments.length; i++) {
    arr.push(typeof arguments[i]);
    if (!out.hasOwnProperty(arr[i])) {
      out[arr[i]] = 1;
    } else {
      out[arr[i]] += 1;
    }
  }
  return out;
}

function executeforEach(arr, clb) {
  for (let i = 0; i < arr.length; i++) {
    clb(arr[i]);
  }
}

function mapArray(arr, clb) {
  let result = [];
  executeforEach(arr, arg => result.push(clb(arg)));
  return result;
}

function filterArray(arr, clb) {
  let result = [];
  executeforEach(arr, arg => {
    if (clb(arg)) {
      result.push(arg);
    }
  });
  return result;
}

function showFormattedDate(obj) {
  let monthList = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };
  let month = obj.getMonth();
  let day = obj.getDate();
  let year = obj.getFullYear();
  return `Date: ${monthList[month]} ${day} ${year}`;
}

function canConvertToDate(str) {
  let time = new Date(str).getTime();
  if (isNaN(time)) {
    return false;
  } else {
    return true;
  }
}

function daysBetween(objA, objB) {
  const milisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  let diff = Math.round(
    (objB.getTime() - objA.getTime()) /
      (milisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
  );
  return diff;
}

function getAmountOfAdultPeople(arr) {
  const adultLimit = 18;
  let currentDate = new Date();
  let adultForToday = new Date(currentDate).setFullYear(
    currentDate.getFullYear() - adultLimit
  );
  let result = filterArray(arr, obj => {
    if (daysBetween(new Date(obj[' birthday ']), new Date(adultForToday)) > 0) {
      return true;
    } else {
      return false;
    }
  });
  return result.length;
}

function keys(obj) {
  let output = [];
  let x;
  for (x in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, x)) {
      output.push(x);
    }
  }
  return output;
}

function values(obj) {
  let output = [];
  let x;
  for (x in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, x)) {
      output.push(obj[x]);
    }
  }
  return output;
}

const data = 
[
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

const one = 1;
const two = 2;
const three = 3; 
const five = 5;
const eight = 8;

getNumbers('string'); // returns [] 
getNumbers('n1um3ber95'); // returns [1,3,9,5] 

findTypes('number') // returns {“string”:1} 
findTypes(null, five, 'hello') // returns {“object”:1, “number”:1, “string”:1}

executeforEach([one,two,three], el => console.log(el)) // logs 1 2 3

mapArray([two, five, eight], el => el + three ) // returns [5, 8, 11]

filterArray([two, five, eight], el => el > three ) // returns [5, 8]

showFormattedDate(new Date('2019-01-27T01:10:00')) 

canConvertToDate('2016-13-18T00:00:00') // false
canConvertToDate('2016-03-18T00:00:00') // true

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))

getAmountOfAdultPeople(data) // returns 3;

keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]

