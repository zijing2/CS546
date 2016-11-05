let exportedMethods = {
    textManipulate(text, string, num1, num2) {
        return new Promise((fulfill, reject) => {

            if(typeof text != "string" || !(text)) {
                throw "Must provide a text"
            }
            if(typeof string != "string" || !(string)) {
                throw "Must provide a string"
            }

            if(num1 < 1 || num1 > 25 || num2 < 1 || num2 > 25){
                throw "That both numbers are greater than or equal to 1 and less than or equal to 25.";
            }

            num1 = parseInt(num1);
            num2 = parseInt(num2);
            if (typeof num1 !== "number") throw "Must provide a number";
            if (isNaN(num1)) throw "Must provide a number";
            if (typeof num2 !== "number") throw "Must provide a number";
            if (isNaN(num2)) throw "Must provide a number";

            var textLength = text.length;
            if(num1*num2 > textLength - 1){
                throw "insert content position out of range";
            }

            var textArr = text.split("");
            
            for (var i = 0; i < num1; i++) {
                var insertPlace = num2+num2*i - 1;
                textArr[insertPlace] = textArr[insertPlace] + string;
            }

            var rtnString = textArr.join("")
          
            fulfill(rtnString) ;
        });
    }
    
}

module.exports = exportedMethods;