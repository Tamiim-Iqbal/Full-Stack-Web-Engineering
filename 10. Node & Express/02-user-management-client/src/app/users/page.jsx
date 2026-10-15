import React, { Suspense } from 'react';
import Users from '../components/Users';

const usersPromise = async () => {
    const data = await fetch('http://localhost:5001/users')
    return data.json();
     
}

const UsersPage = async() => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Users usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default UsersPage;