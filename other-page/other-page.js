// use checkAuth function to redirect is user not authenticated
//log out and redirect 
// add event listener to the logout button and call logout
import { checkAuth, logout } from '../fetch-utils.js';
//import functions to use here 
checkAuth();
//runt the checkAuth make sure the user is logged in 
//create event listener for logout button 
const logoutBtn = document.getElementById('logout'); //grab button
logoutBtn.addEventListener('click', async () => {
    //running logout
    await logout();
});

