/**
 * @Title : forEach
 */

const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index, array) => {
//   console.log(index + ". Element is = " + value + ' Array '+ array);
// });

function loop(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}


const result = loop(arr, function(v, idx, array){
  console.log(idx + ". Element is = " + v + ' Array '+ array);
})
