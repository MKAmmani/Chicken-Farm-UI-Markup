document.addEventListener('DOMContentLoaded', function () {

    // --- 1. TOGGLE BETWEEN LOGIN AND REGISTER PAGES ---
    const viewLogin    = document.getElementById('view-login');
    const viewRegister = document.getElementById('view-register');

    const linkToRegister = document.getElementById('link-to-register');
    const linkToLogin    = document.getElementById('link-to-login');

    linkToRegister.addEventListener('click', function (e) {
        e.preventDefault();
        viewLogin.classList.remove('active');
        viewRegister.classList.add('active');
        window.scrollTo(0, 0);
    });

    linkToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        viewRegister.classList.remove('active');
        viewLogin.classList.add('active');
        window.scrollTo(0, 0);
    });


    // --- 2. MULTIPLE PASSWORD TOGGLE ICONS ---
    const toggleIcons = document.querySelectorAll('.toggle-password');

    toggleIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const targetId     = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);

            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });


    // --- 3. FORM SUBMISSION SIMULATIONS ---
    document.getElementById('formLogin').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        alert('LOGIN SUBMITTED!\n\nEmail: ' + email);
    });

    document.getElementById('formRegister').addEventListener('submit', function (e) {
        e.preventDefault();
        const name     = document.getElementById('regName').value;
        const email    = document.getElementById('regEmail').value;
        const pass     = document.getElementById('regPassword').value;
        const confPass = document.getElementById('regConfirmPassword').value;

        if (pass !== confPass) {
            alert('Passwords do not match!');
            return;
        }

        alert('REGISTER SUBMITTED!\n\nName: ' + name + '\nEmail: ' + email);
    });

});
