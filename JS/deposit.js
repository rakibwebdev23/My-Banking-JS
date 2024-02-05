document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositHere = document.getElementById('deposit-field');
    const nweDepositAmountString = depositHere.value;
    depositHere.value = '';
    const newDepositAmount = parseFloat(nweDepositAmountString);
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    previousDeposit.innerText = totalDepositAmount;

    // balance section
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const mainBalanceAmount = parseFloat(mainBalanceString);
    const totalMainBalance = mainBalanceAmount + newDepositAmount;
    mainBalance.innerText = totalMainBalance;
})