/**
 * @Title : Callback Function
 */

// function helle(name){
//   print(name)
//   print('Somethins Else')
// }

// function print(args){
//   console.log(args);
// }

// helle('Ariful Islam');

// function hello(name, print) {
//   print(name);
// }

// hello('Ariful Islam', print)

// function print(args){
//   console.log(args);
// }\

// hello('Ariful Islam', function(name){
//    console.log(`Hi, How are you ${name}`);
// })

// hello('Ariful islam Raju', function(name){
//   console.log(` Length of ${name} is ${name.length}`);
// })

// var me = {
//   name: "Ariful Islam Raju",
//   age: 29,
//   email: "ariful@gmail.com",
// };

// function printMySelft(person, Callback) {
//   console.log("Person " + person.name + "(" + person.age + ")");

//   if (person.age > 18) {
//     Callback(person.email);
//   }
// }

// printMySelft(me, function (email) {
//   console.log("Email sent to " + email);
// });

function print(data, Callback1, Callback2) {
  console.log("Original data: " + data);
  Callback1(data);
  Callback2(data);
}

print(
  "Ariful Islam Is a grate person of the home",
  function (data) {
    const upper = data.toUpperCase();
    console.log(upper);
  },
  function (data) {
    const lower = data.toLowerCase();
    console.log(lower);
    console.log('Length ' + data.length);
  }
);
