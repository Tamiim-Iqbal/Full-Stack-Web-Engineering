import React from 'react';
import UserCard from '../../components/UserCard';

const UsersPage = async () => {

    const response = await fetch('http://localhost:5001/users')
    const users = await response.json()

    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {
                users.map(user => <UserCard key={user._id} user={user} />)
            }
            </div>
        </div>
    );
};

export default UsersPage;