import React from 'react';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    return response.json();
}


const getPosts3 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

// try catch
const getPosts2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
        return response.json();
    } 
    catch (error) {
        throw new Error('Failed to fetch posts');
    }
}

const PostsPage = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    // const posts = await response.json(); 

    const postsPromise = await getPosts();

    return (
        <div>
            <h2 className="text-3xl font-bold">Posts Page : {postsPromise.length}</h2>
        </div>
    );
};

export default PostsPage;