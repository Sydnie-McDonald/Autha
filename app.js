import { redirectIfLoggedIn, signupUser } from './fetch-utils.js';
// grab my DOM elements and where I am updating to the html
const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    // prevents the default action when a link is clicked, page refresh 
    e.preventDefault();
    // grab the email value and password value
    await signupUser(signUpEmail.value, signUpPassword.value);
    // run redirect if logged in to make sure the user is verified and log them in redirect to other page
    redirectIfLoggedIn();

});