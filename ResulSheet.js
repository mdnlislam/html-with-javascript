/*
1. firt time subject Number
2. then number to point
3. then point to gread
4.  dinamic
5.  
*/

const studant={
	bangla:70,
	english:60,
	arabic:50,
	
};

for(let studants in studant  ){
	
const Subjectnumber=studant[studants];
const GPA=numberTopoint(Subjectnumber);
	
	console.log(GPA);
	
};


function numberTopoint(marks){
	let point=0;
	
	if(marks>=80){
		point=5.00
	}

   else if(marks>=70){
	 point=4.00;
 }
   else if(marks>=60){
	 point=3.00;
 }
   else if(marks>=50){
	 point=2.00;
 }
     return point;
	
};

   const subject =Object.keys(studant);
   const subjectLength=subject.length;
   
   console.log(subject);





//console.log(GPA);