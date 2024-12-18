/* string
1. number to string
2. concat (3 ways) */




let roll=246718;

let numToStri=roll.toString();

console.log(numToStri);


//concat (3 ways)

let A='apple';
let B='bet';

let concat=A+B;
let concat2=A. concat(B);
let concat3=`${A}${B}`;
console.log(concat,concat2,concat3);


// string to number

let name='245';

let striTonum=Number(name);

console.log( typeof striTonum);
