import React from 'react';
import Counter from './components/counter';

const DashboardPage = () => {
    return (
        <div>
            <h2>Dashboard</h2>

            <Counter></Counter>
            <ul>
                <li>Dashboard Item 1</li>
                <li>Dashboard Item 2</li>
                <li>Dashboard Item 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;