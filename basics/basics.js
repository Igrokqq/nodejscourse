// scope of variables
// functions (open/closed)
// array, objects, boolean, number, strings
// operators (+, -, +=, -=, /, *)
// control structures (if, switch..case, try..catch)
// spread operator

// SCOPES
function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}

const a = 5;
a = 7; // TypeError: Assignment to constant variable.

// Functions

// has context
function foo() {
  this.a = 2;
  return 1 + this.a;
}

// hasn't context
const foo2 = () => {
  return 1 + 2;
}


// DATA TYPES
// ARRAY
const arr = [1,2,3,4,5];
const arrPlusOne = arr.map(n => n + 1); // 2,3,4,5,6
const arrTotalAmount = arr.reduce((total, n) => total + n, 0); // 15, total = 0
const arrFilteredByNumber = arr.filter(n => n !== 1); // 2,3,4,5
const arrWhereEveryItemShouldBe = arr.every(n => n > 1); // false
const arrSomeOfValuesShouldBeTrue = arr.some(n => n === 1) // true because among numbers exist 1
const mergedArr = [10, 11, 12, ...arr];
// STRING
const str = '1,2,3,4,5';
const parsedString = str.split(','); // [1,2,3,4,5]
const jsonString = JSON.stringify(str); // '"1,2,3,4,5"'
// BOOLEAN or logical value
const boolTrue = true;
const boolFalse = false;
// NUMBER
const n = 5;
const strN = '5'; // 'A' -> NUMBER in result you will have NaN
const isNaN = Number.isNaN(n); // false because NaN is NoN-Numeric-Value
const isInteger = Number.isInteger(n); // true
const parsedStrNumber = Number(strN); // 5

// OPERATORS
const sum = 1 + 2; // 3
const difference = 2 - 1; // 1
const multiply = 1 * 2; // 2
const divide = 2 / 2 // 1

// CONTROL STRUCTURES
if (true) {
  console.log(1)
} else {
  console.log(2)
}

switch (1) {
  case 1: {
    console.log(1);
    break;
  }
  default:
    break;
}

try {
  throw new Error('My custom error')
} catch (error) {
  console.error(error);
}
