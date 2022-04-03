import React from 'react';

const Review = (props) => {
    const { name, body } = props.review;
    return (
        <div className='border-2 border-solid border-gray-600'>
            <h2 className='text-2xl text-left m-3'>{name}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Review;