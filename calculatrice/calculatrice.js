const displayBox = document.querySelector(".display");
const displayInput = document.querySelector(".display-input");
const displayResult = document.querySelector(".display-result");
const buttons = document.querySelectorAll("button");
const operator = ["%","/","x","-","+"];
let input = "";
let result = "";
let lastCalculation = false;

const calculate = btnvalue => {
    const lastChar = input.slice(-1),
        secondToLastChar = input.slice(-2, -1),
        withoutToLastChar = input.slice(0, -1),
        isLastCharOperator = operator.includes(lastChar),
        isInvalidResult = ["error", "infinity"].includes(result);


    if(btnvalue === "="){
        if(
            input === "" ||
            lastChar === "." ||
            lastChar === "(" ||
            isLastCharOperator && lastChar !== "%" ||
            lastCalculation
        )return;
        const formattedInput = replaceOperators(input);
        try{
            const calculatedValue = eval(formattedInput);
            result = parseFloat(calculatedValue.toFixed(10)).toString();
        }
        catch{
            result = "error";
        }

        input += btnvalue;
        lastCalculation = true;
        displayBox.classList.add("active");
    }
    else if(btnvalue === "AC"){
        resetCalculator("");
    }
    
    else if(btnvalue === ""){
        if(lastCalculation){
            if(isInvalidResult) resetCalculator("");

            resetCalculator(result.slice(0, -1));
        }
        else input = withoutToLastChar;
    }
    else if(operator.includes(btnvalue)){
        if(lastCalculation) {
            if(isInvalidResult) return;
            resetCalculator(result + btnvalue);
        }
        else if(
            ( input === "" || lastChar === "(") && btnvalue !== "-" || input === "-" ||
            lastChar === "." ||
            secondToLastChar === "(" && lastChar === "-" ||
            (secondToLastChar === "%" || lastChar === "%") && btnvalue ==="%"
        )return;
        else if(lastChar === "%") input += btnvalue;
        else if(isLastCharOperator) input = withoutToLastChar + btnvalue;
        else input += btnvalue;
    }

    // else if(btnvalue === "."){
    //     const decimalValue = "0."
    //     else if(lastChar === ")" || lastChar === "%")
    //     if(lastCalculation) resetCalculator(decimalValue);
    // }
    
    else{
        if(lastCalculation) resetCalculator(btnvalue);
          else input += btnvalue;
    }
    

    displayInput.value = input;
    displayResult.value = result;
    displayInput.scrollLeft = displayInput.scrollWidth;
};

const replaceOperators = input => input.replaceAll("÷", "/").replaceAll("×", "*")

const resetCalculator = newInput => {
    input = newInput;
    result = "";
    lastCalculation = false;
    displayBox.classList.remove("active");
};


buttons.forEach(button =>
    button.addEventListener("click", e => calculate(e.target.textContent))
);