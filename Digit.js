const digits=[15,12,17,11,31 ,60,19,28];


for(let digit in digits){
	const first=digits[digit];
	const key2=Number(digit)+1;
	const last=digits[key2];
	
	//console.log(first);
	//console.log(last);
	if(first>last ){
	digits[digit]=last;
    digits[key2]=first;	
	}
} 

	console.log(digits);
	
	
 /*for(let i=0;i<digits.length;i++){
	 const first=digits[i];
	 const key2=digits;
	
	if(first,key2){
	 return a-b
		
	}
	 
	console.log(digits); 
 } */
