import React from 'react';

const BlogAns1 = () => {
    return (
        <div>
            <h2 className='text-2xl mb-4 mt-9'>1. What is Context API?</h2>
            <p className='mx-4'>-- Context API is a component structure of React. The purpose of the context API is to pass data to any level of an application. It helps us to solve prop drilling. If we use context API, we don't need to share data by props at every level to send data to a particular component. We can directly send data from the grandparent component to the child component and others. We can pass many kinds of values with it. Like - state, string, array, dynamic value, etc.</p>
        </div>
    );
};

export default BlogAns1;