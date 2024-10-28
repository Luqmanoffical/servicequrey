
// LOGIN PAGE FUNCTIONALITY START
document.addEventListener("DOMContentLoaded", () => {
    
    // Password toggle functionality
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const isPasswordHidden = passwordField.getAttribute('type') === 'password';

        passwordField.setAttribute('type', isPasswordHidden ? 'text' : 'password');

        this.classList.toggle('fa-eye-slash');
    });

    // Form validation logic
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        emailError.classList.add('d-none');
        passwordError.classList.add('d-none');

        if (!email.value.trim()) {
            emailError.textContent = 'Email is required.';
            emailError.classList.remove('d-none');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) { // Basic email format check
            emailError.textContent = 'Please enter a valid email address.';
            emailError.classList.remove('d-none');
            isValid = false;
        }

        if (!password.value.trim()) {
            passwordError.textContent = 'Password is required.';
            passwordError.classList.remove('d-none');
            isValid = false;
        } else if (password.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            passwordError.classList.remove('d-none');
            isValid = false;
        }

        if (isValid) {
            alert('Login successful!');
            this.submit();
        }
    });
});
// LOGIN PAGE FUNCTIONALITY END



// FAQ's Accordion functionality Start


// FAQ's Accordion functionality End





// PRIVACY POLICY functionality START

document.addEventListener("DOMContentLoaded", () => {
    const text = "Service Query";
    let index = 0;
    const speed = 100; // Typing speed in milliseconds

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("privacy-policy-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            // Start the blinking cursor once typing completes
            document.getElementById("privacy-policy-cursor").style.display = "inline";
        }
    }

    typeEffect(); // Start typing effect once DOM is loaded
});
// PRIVACY POLICY functionality End



