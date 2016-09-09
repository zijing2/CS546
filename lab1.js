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

// try{
// 	var sum = sumOfSquares(5,3,10);
// 	console.log(sum);
// }catch(err){
//  console.log(err);
// }


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
	if(firstName==null){
		throw "firstName can not be empty";
	}

	if(firstName!=null&&lastName==null&&title==null){
		console.log('Hello, ' + firstName + '!');
	}else if(firstName!=null&&lastName!=null&&title==null){
		console.log('Hello, ' + firstName + ' ' + lastName + '. I hope you are having a good day!');
	}else if(firstName!=null&&lastName!=null&&title!=null){
		console.log('Hello, Mr. ' + firstName + ' ' + lastName + '! Have a good evening!');
	}else{
		throw "no matches";
	}
}

// try{
// 	sayHelloTo();
// }catch(err){
//  console.log(err);
// }

// sayHelloTo("Phil");
// sayHelloTo("Phil", "Barresi");
// sayHelloTo("Phil", "Barresi", "Mr.");

/**
 * For the third function, you will create and return a simple song called 99 Cups of Coffee on the Desk.
 * The lyrics of this song grow longer depending on how many cups of coffee there are on the desk.
 * If you run cupsOfCoffee(5) it would return:
 */
function cupsOfCoffee(howManyCups){
	if(typeof(howManyCups)!='number'||howManyCups<0){
		throw "the number of coffees is invalid";
	}

	for(var i=howManyCups; i>0; i--){
		//console.log(i.toString() + 'asdfasdf');
		console.log(i.toString() + ' cups of coffee on the desk! '
								+ i.toString() + ' cups of coffee!'+"\n"+'Pick one up, drink the cup, '+ (i-1).toString()
								 + ' cups of coffee on the desk!'+"\n");
	}

}


// cupsOfCoffee(99);









