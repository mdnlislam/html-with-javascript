/*
Array Object
1. how to identify array
2. data add,add data start of array,add data end of array,delete data start of array,delete dada end  of array
3. data update ,delete
4. find mathode

*/


// how to identify array

const fruits=["Banana","Orange","Apple","Mango"];

const resul=Array.isArray(fruits);

console.log(resul);

//data add

const number=[1,2,3,4,5,6];

number.push(6,7);
number.unshift(0);

//delete data start of array,delete dada

number.shift();
number.pop();

console.log(number);



const productItem=["BMW","TVR","HONDA","SUZUKI"];

productItem.splice(2);

console.log(productItem);


//find mathode

const Digit=[10,6,20,35,66];

const FindNumber=Digit.find(function(Digit){
	return Digit>6;
});

console.log(FindNumber);


let text = "How are you doing today?";
const myArray = text.split("o");
console.log(myArray);