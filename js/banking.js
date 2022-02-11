//collect user input from input fields
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
};
//get previous balance already in deposit or withdaw or balance
function getCurrentAcc(accountId) {
    const currentAccText = document.getElementById(accountId);
    const currentBalanceAmount = parseFloat(currentAccText.innerText);
    return currentBalanceAmount;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    console.log(depositAmount);
    const totalDepositedAmount = getCurrentAcc('deposit-total')
    console.log(totalDepositedAmount);
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    console.log(withdrawAmount);
    const totalWithdrawAmount = getCurrentAcc('withdraw-total');
    console.log(totalWithdrawAmount);

})