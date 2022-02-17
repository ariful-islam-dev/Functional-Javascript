/**
 * @Title : Reduce function
 */

const arr = [5, 9, 1, 2, 3, 4, 6, 7, 8];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(`Summetion = ${sum}`);

const summetion = arr.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(summetion);

//

function myReduce(arr, callback, init) {
  let acc = init,
    start = 0;
  if (!init) {
    (acc = arr[0]), (start = 1);
  } 

  for (let i = 0; i < arr.length; i++) {
    acc += callback(acc, arr[i], i, arr);
  }

  return acc;
}

const resultReduce = myReduce(arr, function (a, b) {
  return a + b;
}, );

console.log(resultReduce);
