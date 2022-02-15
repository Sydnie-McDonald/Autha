import { redirectIfLoggedIn, signupUser } from './fetch-utils.js';
const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(signUpEmail.value, signUpPassword.value);
    await signupUser(signUpEmail.value, signUpPassword.value);
    redirectIfLoggedIn();

});