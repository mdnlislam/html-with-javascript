/*
1. firt time subject Number
2. then number to point
3. then point to gread
4.  dinamic
5.  
*/

const studant={
	bangla:80,
	english:60,
	arabic:80,
	
};

for(let studants in studant  ){
	
const Subjectnumber=studant[studants];
const grade=subjectToGrade(Subjectnumber)
	
	console.log(grade);
	
};

function subjectToGrade(subects){


function numberTopoint(marks){
	let point=0;
	
	if(marks>=80){
		point=5.00;
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

 
 let points=0;
for(let subject in studant ){
	const subjectName=studant[subject];
const X=numberTopoint(subjectName);
	points=points+X;
};

	//console.log(points);


   const subject =Object.keys(studant);
   const subjectLength=subject.length;
   const GPA=points/subjectLength;
   
  //console.log(GPA);

function pointToGread(point){
	let grade='';
	
	if(point>=5.00){
		grade="A+";
	}
	else if(point>=4.00){
		grade="B+";
	}
	else if(point>=3.00){
		grade="C+";
	}
	else if(point>=2.00){
		grade="D";
	}
	
	return grade;
}

const Grade=pointToGread(GPA);
//console.log(Grade);
  return Grade;

};