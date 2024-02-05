document.getElementById('btn-widthdraw').addEventListener('click', function(){
    const widthdrawElement = document.getElementById('widthdraw-field');
    const newWidthdrawAmountString = widthdrawElement.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
    widthdrawElement.value = '';
    if(isNaN(newWidthdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    const previousWidthdraw = document.getElementById('previous-widthdraw');
    const previousWidthdrawAmountString = previousWidthdraw.innerText;
    const previousWidthdrawAmount = parseFloat(previousWidthdrawAmountString);
    const totalWidthdrawAmount = previousWidthdrawAmount + newWidthdrawAmount;
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const mainBalanceAmount = parseFloat(mainBalanceString);
    if(newWidthdrawAmount > mainBalanceAmount){
        alert('Do not have any Balance');
        return;
    }
    const totalMainBalance = mainBalanceAmount - newWidthdrawAmount;
    mainBalance.innerText = totalMainBalance;
    previousWidthdraw.innerText = totalWidthdrawAmount;
})