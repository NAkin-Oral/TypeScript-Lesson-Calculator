"use strict";
const displayResults = () => {
    resultElement.textContent = calculator.getOriginalInputs;
    liveResult.textContent = calculator.output;
};
//a function to add the clicked button to input
const onButtonClick = (e) => {
    const target = e.currentTarget;
    if (!target.classList.contains('not-show') &&
        !target.classList.contains('delete-sec')) {
        calculator.addOperator(target.textContent);
    }
    else if (target.classList.contains('equal')) {
        calculator.calculate(true, true);
    }
    else if (target.classList.contains('backspace')) {
        if (target.classList.contains('clear_all'))
            calculator.deleteAllChars();
    }
    displayResults();
};
