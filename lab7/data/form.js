let exportedMethods = {
    textManipulate(text, string, num1, num2) {
        return new Promise((fulfill, reject) => {

            if(typeof text != "string" || !(text)) {
                throw {name:"text",message:"Must provide a text"};
            }
            if(typeof string != "string" || !(string)) {
                throw {name:"string",message:"Must provide a string"};
            }

            if(num1 < 1 || num1 > 25 ){
                throw {name:"num1", message:"That number are greater than or equal to 1 and less than or equal to 25."};
            }

            if(num2 < 1 || num2 > 25){
                throw {name:"num2", message:"That number are greater than or equal to 1 and less than or equal to 25."};
            }

            num1 = parseInt(num1);
            num2 = parseInt(num2);
            if (typeof num1 !== "number") throw {name:"num1",message:"Must provide a number"};
            if (isNaN(num1)) throw {name:"num1",message:"Must provide a number"};
            if (typeof num2 !== "number") throw {name:"num2",message:"Must provide a number"};
            if (isNaN(num2)) throw {name:"num2",message:"Must provide a number"};

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