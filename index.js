/**
 * @Title : forEach
 */

const arr = [5, 9, 1, 2, 3, 4, 6, 7, 8];

// const newArra = [];

// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] % 2 === 1){
//     newArra.push(arr[i]);
//    }

// }

// console.log(newArra);

// const result = arr.filter((value, index, array) => value % 2 === 0)

// console.log(result);

function myFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const even = myFilter(arr, function (value) {
  return value % 2 === 0;
});

console.log(even);
