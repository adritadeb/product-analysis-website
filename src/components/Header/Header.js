import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='mt-8'>
                <Link className='mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/home'>HOME</Link>
                <Link className='mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/reviews'>REVIEWS</Link>
                <Link className='mx-6 hover:bg-blue-300 hover:text-white rounded-md p-4' to='/dashboard'>DASHBOARD</Link>
                <Link className='mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/blogs'>BLOGS</Link>
            </nav>
        </div>
    );
};

export default Header;