document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const regForm = document.getElementById('regForm');
    const forgotForm = document.getElementById('forgotForm');
    const forgotPassForm = document.getElementById('forgotPassForm');
    const toggleLink = document.getElementById('toggleLink');
    const backToLogin = document.getElementById('backToLogin');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const forgotPassword = document.getElementById('forgotPassword').querySelector('a');
    const formTitle = document.getElementById('formtitle');
    const toggleText = document.getElementById('toggleText');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Register';
        toggleText.style.display = 'none';
    });

    backToLogin.addEventListener('click', function() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
        toggleText.style.display = 'block';
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        welcomeMessage.style.display = 'block';
        mainContent.style.display = 'block';
        loginForm.style.display = 'none';
        toggleText.style.display = 'none';
        forgotPassword.style.display = 'none';
        logoutBtn.style.display = 'block';
    });

    logoutBtn.addEventListener('click', function() {
        welcomeMessage.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginForm.style.display = 'block';
        toggleText.style.display = 'block';
        forgotPassword.style.display = 'block';
        formTitle.textContent = 'Login';
    });

    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Akun berhasil didaftarkan!');
        backToLogin.click(); 
    });

    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        forgotForm.style.display = 'block';
        formTitle.textContent = 'Lupa Password';
        toggleText.style.display = 'none';
    });

    backToLoginFromForgot.addEventListener('click', function() {
        forgotForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
        toggleText.style.display = 'block';
    });

    forgotPassForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;
        alert(`Email reset password telah dikirim ke ${email}`);
        backToLoginFromForgot.click();
    });
});
