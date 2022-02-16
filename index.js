/**
 * @Title : First Class Function
 * 
 * Dicler a funtion into a function
 */

// function outer (){
//   const a = 10;
//   function inner(){

//     console.log('I am Inner Function',  a);
//   }
//   inner()

//   console.log('I am OUter Function', );
// }

// outer();

function add(a, b) {
  function sum() {
    return a + b;
  }

  function sub() {
    return a - b;
  }

  function times() {
    return a * b;
  }

  function div() {
    return a / b;
  }

  return sum() + sub() + times() + div();
}

const result = add(10, 5);
console.log(result);

