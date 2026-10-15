import React from 'react';
import { use } from 'react';

const Users = ({ usersPromise }) => {
    const users = use(usersPromise());
    return (
        <div>
            <h2>User data coming soon: {users.length} users</h2>
            {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name} : {user.email}
                    </li>
                ))
            }
        </div>
    );
};

export default Users;