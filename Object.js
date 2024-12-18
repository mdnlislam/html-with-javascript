
/*
### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete

object of two kind
1.object
2.array object

*/

//object to string

const product={
	A:'apple',
	B:'belt',
	id:246718,
};

const ObejctToString=JSON.stringify(product);

const keys=Object.keys(product);

const valus=Object.values(product);




console.log(ObejctToString,keys,valus);

//console.log(product);

//valus access

const product1={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	
	const valueAccess=product1['colour'];
	
	delete product1['name'];
	product1['colour']='white';
	product1['screen']='7-inch';
	
	console.log(product1,valueAccess);