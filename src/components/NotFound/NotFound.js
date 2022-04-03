import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-between items-center mt-14 m-14'>
            <div>
                <h3 className='text-3xl text-teal-800 font-semibold'>The page you are looking for is not found</h3>
                <h2 className='text-5xl text-orange-400 mt-5'>404</h2>
            </div>
            <img className='w-1/2' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        </div>
    );
};

export default NotFound;