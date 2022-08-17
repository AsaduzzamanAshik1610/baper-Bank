// ** 
// 1. add event handlaer with the withdrow button
// 2.get the withdrow amount from the withdrow input field
// 2-5. also make sure to convert the input into a number by using parseFloat
// 3.get previous withdrow total
// 4. calculate total withdrow amount
// 4-5. set total withdrow amount 
// 5. get the previous blance total
// 6. calculate new blance total
// 6-5. set the new blance total
// 7.calculate the inpud Field
// step-1: 
document.getElementById('btn-withdrow').addEventListener('click', function () {
    //  step 2:
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountstring = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountstring);
    console.log(newWithdrowAmount);
    // step:7
    withdrowField.value = '';
    if (isNaN(newWithdrowAmount)) {
        alert('plase provide a valid number');
        return;
    }
    //  step 3:
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousTotalAmountstring = withdrowTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountstring);
    withdrowTotalElement.innerText = previousTotalAmount;

    // step 5:
    const blancetotalElement = document.getElementById('blance-total');
    const previousBlancetotalstring = blancetotalElement.innerText;
    const previousblanceTotal = parseFloat(previousBlancetotalstring);

    if (newWithdrowAmount > previousblanceTotal) {
        alert('mamar barrir abdar paiso mia');
        return;
    }

    // step 4:
    const currentWithdrowtotal = previousTotalAmount + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowtotal;
    // step 6:
    const newBlancetotal = previousblanceTotal - newWithdrowAmount;
    blancetotalElement.innerText = newBlancetotal;


})