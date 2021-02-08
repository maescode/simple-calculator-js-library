function Calculator() {

}

Calculator.prototype.mathOperation = function() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '^') {
        result = parseFloat(result) ** parseFloat(dis2Num);
    }
}

Calculator.prototype.clearVar = function(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = ' ';
    dis2Num = ' ';
    tempResultEl.innerText = result;
}