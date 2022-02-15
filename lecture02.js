/**
 * @Title : First Class Function
 */

function sayName(name) {
  return ` Hello, ${name}`;
}

// 01. A Function can be stored in a variable
const hello = sayName;

// const func = sayName(" Ariful Islam Raju");

// console.log(hello, func);

// console.log(hello("Abdullah Al Zarif"));

//02. A Function can be stored in an Array
const arr = [1, 2, 3];
arr.push(sayName);
// console.log(arr);

// 03. A Function can be stored as an Object Field or Property

const person = {
  name: "Ariful Islam",
  sayName: sayName,
  print: function () {
    console.log("HI");
  },
};

console.log(person);
// 04. We can create function as needed
const sum =
  10 +
  (function () {
    return 20;
  })();
console.log(sum);

// 05. We can pass function as an arguments

function wow(name, func) {
  return func(name);
}

const result = wow("Arirul Islam", sayName);
console.log(result);

// 06. We can return Function from another function

function base(b) {
  return function (n) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= n;
    }

    return result;
  };
}

// const power = base(2);
// const result2 = power(5);

// console.log(result2);

const result3 = base(3)(5);
console.log(result3);
