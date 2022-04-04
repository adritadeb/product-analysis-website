import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='mt-8 flex justify-center'>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/home'>HOME</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-4' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/blogs'>BLOGS</CustomLink>
            </nav>
        </div>
    );
};

export default Header;