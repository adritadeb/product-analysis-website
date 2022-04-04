import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between ml-14 mb-8 mt-5'>
            <h1 className='text-3xl font-bold text-blue-400'>Skill Up</h1>
            <nav className='flex justify-center'>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/home'>HOME</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-4' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='mx-2 md:mx-6 hover:bg-blue-300 hover:text-white rounded-md p-3' to='/blogs'>BLOGS</CustomLink>
            </nav>
        </div>
    );
};

export default Header;