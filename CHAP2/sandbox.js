// alert('oopsie');
// console.log("hello_there_mate");
let age = 20;
let year = 2022;
let email = 'gandheharshith21@gmail.com'
console.log(age,year);

age = 21
console.log(age,year);

const point = 90;
//cant change value for const

var pt = 9;
//older version of leta

let fname = 'Gandhe';
let lname = 'Harshith';

let fullname = fname + ' ' + lname;

console.log(fullname);
console.log(fullname[0]);
console.log(fullname.length);


console.log(fullname.toUpperCase());
let result = fullname.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

let a = fullname.lastIndexOf('a');
console.log(a);

let cut = fullname.slice(3,7); //(from,to)
console.log(cut);

let cu = fullname.substr(4,2);//(from,howmany)
console.log(cu);

let cue = fullname.replace('t','h');//replaces the first ocurance of the first element with second
console.log(cue);

let radius = 10;
const pi = 3.14;

console.log(radius,pi);

//operators

console.log(10/2);
// let res = radius %3;
let area = pi * radius**2;
console.log(area);

//order of operation - B(()) I(**) D(/) M A S

let likes = 10;
likes++
console.log(likes);
likes += 10;
console.log(likes);

//NaN is not a number

console.log(5 * 'hello');

let NoOfLikes = 'this page has' + likes + 'likes';
console.log(NoOfLikes);

//template string
let nof = `this page has ${likes} likes`;
console.log(nof);

title = 'page name'
author = 'i dont care dude'

let html = `
    <h2>${title}</h2>
    <p> ${author}</p>
    <span> this blog has ${likes} likes </span>
`;
console.log(html)

let farray = ['harshith','chinnu','harshi'];
console.log(farray);
console.log(farray[1]); //secod element

//change value
farray[2] = 'harshiiiii';
console.log(farray[2]);

let random = ['haello','name',30,69];
console.log(random);

console.log(random.length);

let m = farray.join('*'); // can use - , _ , ~ etc as symbols in b/w
console.log(m);

console.log(farray.indexOf('chinnu'));

result = farray.concat(['harshith-gandhe','nene']);
console.log(result); 

result = farray.push('nene'); // returns the size of new array and adds the pushed element to old array farray here
console.log(result);

result = farray.pop(); // returns the popped element
console.log(result);
console.log(farray); //returns the remaining array after popping

let p;

console.log(p, p+3 , `this p is ${p}`);

p = null; //0
console.log(p, p+3 , `this p is ${p}`);


//booleans
console.log(true,false, 'true','false');

result = email.includes('@');
console.log(result);
console.log(email.includes('!'));

let names = ['name1','name2','name3'];
console.log(names);
console.log(names.includes('name2'));
console.log(names.includes('name4'));

let fav  = 7;
console.log(fav == 0 );
console.log(fav != 0 );
console.log(age > 0); // >= , <= ,<, etc


nameA = 'shaun';

console.log(nameA == 'shaun' );
console.log(nameA == 'Shaun');
console.log(nameA > 'crystal'); // s>c in alphabet so
console.log(nameA > 'Shaun'); // small letters grater than large

console.log(fav == '7');
console.log(fav == 7);
console.log(fav != 7);
//both true ... doesnt make sense
//converts to string before comparing anything
// this is called loose comparisom

//strict eqaulity
console.log(fav === 7); // true bec number type
console.log(fav === '7'); // not true bec string type
console.log(fav !== '7');

//TYPE CONVERSION

let score = '100'
console.log(score +1);

score = Number(score);
console.log(score +1);
console.log(typeof score);

result = Number('word')
console.log(result);

result = String(score);
console.log(result , typeof result);

result = Boolean(1); // 0 false ,  anyother true, strings of any length true even '0'

