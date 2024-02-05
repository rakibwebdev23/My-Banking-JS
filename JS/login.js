document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const setUserEmail = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const setUserPassword = userPassword.value;

    if (setUserEmail === 'rakibhasan@gmail.com' && setUserPassword === 'rakib') {
        window.location.href = 'bank-balance.html';
    }
    else {
        alert('invalid user');
    }
})