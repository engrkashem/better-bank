//collect user input from input fields
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
};
//get previous balance already in deposit or withdaw or balance
function getUpdatedAcc(accountId, transectionAmount) {
    const currentAccText = document.getElementById(accountId);
    const currentBalanceAmount = parseFloat(currentAccText.innerText);
    const updatedBalance = currentBalanceAmount + transectionAmount;
    currentAccText.innerText = updatedBalance;
    return currentAccText;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    getUpdatedAcc('deposit-total', depositAmount);

});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    getUpdatedAcc('withdraw-total', withdrawAmount);

})