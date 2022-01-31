// function greet(){
//     console.log("hello there");
// }

// const speak = function(name){
//     console.log(`good morning ${name}`);
// };

// greet();
// speak("harshi")

//normal function
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

//arrow function
const calcAreA = (radius) => {
  return 3.14 * radius ** 2;
};

console.log(calcArea(5));
console.log(calcAreA(5));

const calcArEA = (radius) => {
  return 3.14 * radius ** 2;
};
// still works because only one variable passing
//so no paranthesis req

const calcAREA = (radius) => 3.14 * radius ** 2;
console.log(calcAREA(5));

const x = 5;

// passsing a ffunction in another function
const myFunc = (callbackfunc) => {
  // call that functionn as input
  let value = 50;
  callbackfunc(value); //using that function
};

myFunc(function (value) {
  //the argument we are passing to mufunc is
  console.log(value); // function(value){console.log(value);}
});

myFunc((value) => {
  //arrow function form for above function
  console.log(value);
});

let people = ["mario", "luigi", "harshi", "harshith"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
