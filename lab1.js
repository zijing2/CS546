/**
 * @description 
 * [ For your first function, you will calculate the 
 * sum of the squares of 3 numbers and return that result. 
 * That means sumOfSquares(5, 3, 10) would return 134.]
 */
function sumOfSquares(num1, num2, num3){
	if(typeof(num1)!='number'||typeof(num2)!='number'||typeof(num3)!='number'){
		 throw "arguments are not numbers";
	}
	return num1*num1+num2*num2+num3*num3;
}
//test

// try{
// 	var sum = sumOfSquares(5,3,10);
// 	console.log(sum);
// }catch(err){
//  console.log(err);
// }


/**
 * @description 
 * [ For the second function, you will make a simple function that uses console.
 * log to print hello to someone!The interesting thing about this function is 
 * that you don't have to have all the inputs to run.
 * Your function should print a string in the following format:
 * sayHelloTo(); // throws 
 * sayHelloTo("Phil"); // logs: Hello, Phil! 
 * sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
 * sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening! ]
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
 * @description 
 * [ For the third function, you will create and return a simple song called 99 Cups of Coffee on the Desk.
 * The lyrics of this song grow longer depending on how many cups of coffee there are on the desk.
 * If you run cupsOfCoffee(5) it would return: ]
 */
function cupsOfCoffee(howManyCups){
	if(typeof(howManyCups)!='number'||howManyCups<1){
		throw "hey buddy, wrong call, no free coffee today";
	}

	var str1 = '';
	for(var i=howManyCups; i>1; i--){
		//console.log(i.toString() + 'asdfasdf');
		var str1 = str1 + i.toString() + ' cups of coffee on the desk! '
								+ i.toString() + ' cups of coffee!'+"\n"+'Pick one up, drink the cup, '+ (i-1).toString()
								 + ' cups of coffee on the desk!'+"\n";
	}


	var str2 = '1 cup of coffee on the desk! 1 cup of coffee!'+ "\n" + 'Pick it up, drink the cup, no more coffee left on the desk!';
	return str1+str2;
}

 console.log(cupsOfCoffee(5));

/**
 * @description 
 * [ For the fourth function, you will calculate how many times a substring occurs in a given string
 * For example, calling countOccurrencesOfSubstring("hello world", "o");should return 2, 
 * because the letter o appears two times in the string.
 * However, you must also factor in a case where there are overlaps! 
 * When you call countOccurrencesOfSubstring("Helllllllo, class!", "ll");should return 6 ].
 */
function occurrencesOfSubstring(fullString, substring){
	if(typeof(fullString)!='string'|| typeof(substring)!='string'){
		throw "both fullString and substring have to be a string";
	}

	var count = 0;

	for(var i=0; i<=fullString.length-substring.length; i++){
		var temp = fullString.substring(i,i+substring.length);
		if(temp === substring){
			count = count + 1;
		}
	}

	return count;

}

// console.log(occurrencesOfSubstring("hello world", "o"));
// console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));


/**
 * @description 
 * [ For your final function, you will take in a paragraph and randomize the sentences in it.
 * var paragraph = "Hello, world! I am a paragraph. 
 * You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. 
 * Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
 * console.log(randomizeSentences(paragraph));
 *
 * Would print something like:
 * You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. 
 * I am a paragraph. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks 
 * -- no quotations.  Hello, world! ]
 */
function randomizeSentences(paragraph){
	if(typeof(paragraph)!='string'){
		throw "paragraph must be string";
	}

	//split by the full stop
	var sentenceArray = paragraph.split('.');
	//remove the empty element of the array
	sentenceArray = sentenceArray.slice(0,sentenceArray.length-1);
	//trim sentence
	for (var i = sentenceArray.length - 1; i >= 0; i--) {
		if(sentenceArray[i].substring(0,1)===' '){
			sentenceArray[i] = sentenceArray[i].substring(1,sentenceArray[i].length);
		}
		sentenceArray[i] = sentenceArray[i] + '.';
	};
	//shuffle array
	var shuffleArray = sentenceArray.sort(function(){return Math.random()>0.5?-1:1;}); 

	return shuffleArray.join(' ');
}

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

//console.log(randomizeSentences(paragraph));


