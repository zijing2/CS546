(function () {
    let formMethods = {
        textManipulate: function (text, string, num1, num2) {
            if(typeof text != "string" || !(text)) {
                throw "Must provide a text"
            }
            if(typeof string != "string" || !(string)) {
                throw "Must provide a string"
            }

            num1 = parseInt(num1);
            num2 = parseInt(num2);
            if (typeof num1 !== "number") throw "Must provide a number";
            if (isNaN(num1)) throw "Must provide a number";
            if (typeof num2 !== "number") throw "Must provide a number";
            if (isNaN(num2)) throw "Must provide a number";
            if(num1 < 1 || num1 > 25 || num2 < 1 || num2 > 25){
                throw "That both numbers are greater than or equal to 1 and less than or equal to 25.";
            }

            var textLength = text.length;
            if(num1*num2 > textLength - 1){
                throw "insert content position out of range";
            }

            var textArr = text.split("");
            
            for (var i = 0; i < num1; i++) {
                var insertPlace = num2+num2*i - 1;
                textArr[insertPlace] = textArr[insertPlace] + string;
            }

            var rtnString = textArr.join("");
            return rtnString;
        }
    };
    
    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var firstNumberElement = document.getElementById("number1");
        var secondNumberElement = document.getElementById("number2");
        var textareaElement = document.getElementById("textarea1");
        var stringElement = document.getElementById("string1");


        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                var firstNumberValue = firstNumberElement.value;
                var secondNumberValue = secondNumberElement.value;
                var textareaValue = textareaElement.value;
                var stringValue = stringElement.value;

                var parsedFirstNumberValue = parseInt(firstNumberValue);
                var parsedSecondNumberValue = parseInt(secondNumberValue);

                var result = formMethods.textManipulate(textareaValue, stringValue, parsedFirstNumberValue, parsedSecondNumberValue);
                resultTextElement.textContent = result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();