// step 1: add click event handaler with the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    //  always remember to use.value to get text from an input text
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get the password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element 

    // Danger: dont varify email password on the client side
    // step4: varify email and password and check whether valid or not
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if (email === 'ashik@gmail.com' && pass === 'ashik') {
        window.location.href = 'bank.html'
    }
    else {
        alert('tui password vulegoso !! toke aami tejjo puttro korlam');
    }
})
