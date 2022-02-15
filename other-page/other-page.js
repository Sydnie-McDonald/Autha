// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
import { checkAuth, createPost, logout } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
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