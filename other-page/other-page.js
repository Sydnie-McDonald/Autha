// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
import { checkAuth, createPost, logout } from '../fetch-utils.js';
//import functions to use here 
checkAuth();
//runt the checkAuth make sure the user is logged in 
//create event listener for logout button 
const logoutBtn = document.getElementById('logout'); //grab button
logoutBtn.addEventListener('click', async () => {
    //running logout
    await logout();
});


const createForm = document.getElementById('create-post');
createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact')
    };
    const resp = await createPost(newPost);
    console.log(resp);
});