/*
Condition
1. if else      
2. switch
*/

//if else      
	

const time=new Date().getHours();

let greeting;

if(time<10){
	greeting='Good Morning';
}
else if(time<20){
	greeting='Good day';
}
else{
	greeting='Good Evening';
}


console.log(greeting);


//switch
let text;
switch(new Date().getDay()){
	
	default:
	text='looking forward to the weekend';
	
	break;
	
	case 6:
	text='Today is Saturday';
	
	case 0:
	
	text='Today is sunday';
	
	
};

console.log(text);

