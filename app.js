const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpOverlayButton = document.getElementById('signUpOverlay');
const signInOverlayButton = document.getElementById('signInOverlay');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpOverlayButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInOverlayButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
