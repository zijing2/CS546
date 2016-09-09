/**
 * For your first function, you will calculate the 
 * sum of the squares of 3 numbers and return that result. 
 * That means sumOfSquares(5, 3, 10) would return 134.
 */
function sumOfSquares(num1, num2, num3){
	if(typeof(num1)!='number'||typeof(num2)!='number'||typeof(num3)!='number'){
		 throw "arguments are not numbers";
	}
	return num1*num1+num2*num2+num3*num3;
}

try{
	var sum = sumOfSquares(5,3,10);
	console.log(sum);
}catch(err){
 console.log(err);
}


/**
 * For the second function, you will make a simple function that uses console.
 * log to print hello to someone!The interesting thing about this function is 
 * that you don't have to have all the inputs to run.
 * Your function should print a string in the following format:
 * sayHelloTo(); // throws 
 * sayHelloTo("Phil"); // logs: Hello, Phil! 
 * sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
 * sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!
 */
function sayHelloTo(firstName, lastName, title){
	
}




