/**
 * @Title : Closure
 */

// const name = "Abdullah Al Zarif";

// function sayName() {
//   console.log("Hello " + name);
// }

// // console.dir(sayName)


// sayName();


function greeting(msg){
  return function(name){
    console.log(`${msg} ${name}`);
  }
}

const hello = greeting('Hello');
hello('Assadullah Al Labib')