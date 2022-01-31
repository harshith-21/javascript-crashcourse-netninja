//math obj

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random); //random between 0 and 1
console.log(Math.round(10 * random)); // random between 1 and 10
console.log(Math.round(100 * random)); //random between 1 and 100
console.log(Math.round(1000 * random)); // random between 1 and 1000

console.log(Math.round(10 * Math.random()));
