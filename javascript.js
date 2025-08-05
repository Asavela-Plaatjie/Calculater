var newLine = true;
var value1;
var currentOperator;

function digitalBtnPressed(button) {
    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
       var currentValue = document.getElementById("inputBox").value;
       document.getElementById("inputBox").value = currentValue + button;
    }  
}

function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

function btnOperatorPressed(operator) {
    value1 = parseFloat(document.getElementById("inputBox").value);
    currentOperator = operator; 
    newLine = true;

}

function equalsBtnPressed() {
    var value2 = parseFloat(document.getElementById("inputBox").value);
    var result;
    switch (currentOperator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = value1 / value2;
            break;
        default:
            alert("Invalid operator");
            return;
    }
    document.getElementById("inputBox").value = result;
    newLine = true;
    /*currentOperator = null; // Reset operator after calculation
    value1 = null; // Reset value1 after calculation*/
}
