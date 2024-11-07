// app.js
const container = document.querySelector('.container');
const signUpLink = document.querySelector('.signUpLink');
const signInLink = document.querySelector('.signInLink');

// Function to switch to the Register form
signUpLink.addEventListener('click', () => {
    container.classList.add('active');
});

// Function to switch to the Login form
signInLink.addEventListener('click', () => {
    container.classList.remove('active');
});
