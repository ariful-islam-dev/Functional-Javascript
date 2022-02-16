/**
 * @Title : Return Statement
 */

const arr = [4, 5, 1, 0, 8];

function cbfn(a) {
  console.log(a);
}

arr.forEach(cbfn);

// Return a function

function caller() {
  return function (name) {
    return "Caller Calling your " + name;
  };
}

// const x = caller();
// const y = x('Ariful Islam')
// y

// const z = x('Abdullah Al Zarif');
// z

const a = caller()("Ariful Islam");
a;
