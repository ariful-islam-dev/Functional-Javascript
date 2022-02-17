/**
 * @Title : Callback Function
 */

// function host() {
//   console.log("I am host function..");

//   function child(){
//     console.log('I am Child');
//   }
//   return child

//   // return function () {
//   //   console.log("I am chiled");
//   // };
// }

// const a = host()
// a();

// function greeting(msg) {
//   return function (name) {
//     console.log(msg + "  " + name);
//   };
// }


function greeting (msg){
  function ret(name){
    console.log(`${msg} ${name}`);
  }
  return ret
}

const good = greeting("Good Morning");
good("Ariful Islam");
