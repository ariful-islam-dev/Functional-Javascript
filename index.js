/**
 * @Title : Map function
 */

const arr = [5, 9, 1, 2, 3, 4, 6, 7, 8];

const mappedArr = [];

for (let i = 0; i < arr.length; i++) {
  mappedArr.push(arr[i] * arr[i]);
}

console.log(mappedArr);

const squar = arr.map((value) => value * value);
console.log(squar);

function mySquar(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }

  return result;
}

const cusSqur = mySquar(arr, function (value) {
  return value * value;
});


console.log(cusSqur);