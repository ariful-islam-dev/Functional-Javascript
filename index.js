/**
 * @Title : Sort Array of Object
 */

// const arr = [67, 34, 21, 45, 6, 29, 38, 55, 76, 10];

// arr.sort((a, b) => a- b);

// console.log(arr);

const people = [
  { name: "Ariful Islam", age: 28 },
  { name: "Abdullah Al Zarif", age: 2 },
  { name: "Asadullah Al Labib", age: 0.25 },
  { name: "Johirul Islam", age: 25 },
  { name: "Azizul Islam", age: 23 },
  { name: "Asia Khatun", age: 20 },
];

// people.sort(function(a, b){
//   return b.age - a.age
// });

people.sort((a, b) => {
  // return a.name - b.name;

  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(people);
