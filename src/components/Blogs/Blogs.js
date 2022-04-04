import React from 'react';
import BlogAns1 from '../BlogAns1/BlogAns1';
import BlogAns2 from '../BlogAns2/BlogAns2';

const Blogs = () => {
    return (
        <div className='text-left m-16'>
            <h1 className='text-4xl my-12 text-purple-600 font-semibold'>Blog Section</h1>
            <BlogAns1></BlogAns1>
            <BlogAns2></BlogAns2>
        </div>
    );
};

export default Blogs;