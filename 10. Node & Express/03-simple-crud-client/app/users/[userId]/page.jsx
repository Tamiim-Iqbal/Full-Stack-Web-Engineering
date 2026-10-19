import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params

    const response = await fetch(`http://localhost:5001/users/${userId}`)
    const user = await response.json()
    console.log('User details:', user)

    return (
        <div>
            <h2>User Details : {userId}</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetailPage;