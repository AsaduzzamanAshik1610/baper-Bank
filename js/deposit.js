// step1. add event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step2. get the deposit amount from the deposit input field 
    // for inpit field use.value to the value insite the input field
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountstring = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountstring);
    // step 7: clear the deposit field:
    depositField.value = '';
    if (isNaN(newdepositAmount)) {
        alert('plase enter the valid number');
        return;
    }
    // step 3. get the current deposit total amount
    // for non-input (element other then input,textarea) use innertext to get the text  
    const deposittotalElement = document.getElementById('deposit-total');
    const previousdepositTotalstring = deposittotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalstring);
    // step 4: add numbers to set the total deposit
    const currentDeposittotal = previousdepositTotal + newdepositAmount;
    deposittotalElement.innerText = currentDeposittotal;
    // step 5: get blance current total
    const blancetotalElement = document.getElementById('blance-total');
    const previousbleanceAmountstring = blancetotalElement.innerText;
    const previousblanceTotal = parseFloat(previousbleanceAmountstring);
    // step 6:calculate total current blance
    const currentBlancetotal = previousblanceTotal + newdepositAmount;
    blancetotalElement.innerText = currentBlancetotal;

})