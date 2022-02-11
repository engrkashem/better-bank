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
};
//get current balance
function getCurrentBalance(balanceId) {
    const balanceTotalText = document.getElementById(balanceId);
    const currentBalanceAmount = parseFloat(balanceTotalText.innerText);
    return currentBalanceAmount;
};
//updat balance accordingly
function getBalanceUpdat(amount, isAdd) {
    const balanceTotalText = document.getElementById('balance-total');
    const balanceAmount = getCurrentBalance('balance-total');
    if (isAdd == true) {
        balanceTotalText.innerText = balanceAmount + amount;
    }
    else {
        balanceTotalText.innerText = balanceAmount - amount;
    };

};
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        getUpdatedAcc('deposit-total', depositAmount);
        getBalanceUpdat(depositAmount, true);
    }
    else if (depositAmount < 0) {
        alert('You can not deposit negative amount!!');
    }
    else {
        alert('Enter a valid Number.!!');
    };
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance('balance-total');
    if (withdrawAmount > 0 && currentBalance >= withdrawAmount) {
        getUpdatedAcc('withdraw-total', withdrawAmount);
        getBalanceUpdat(withdrawAmount, false);
    }
    else if (withdrawAmount < 0) {
        alert('You can not withdraw negative amount!!');
    }
    else if (currentBalance < withdrawAmount) {
        alert('Insufficient Fund. Please deposit first.!!!');
    }
    else {
        alert('Enter a valid Number.!!');
    };
});