import React from 'react';

const Review = (props) => {
    const { name, body, ratings, img } = props.review;
    return (
        <div className='border-2 border-solid border-blue-300 rounded-xl'>
            <div className='flex items-center'>
                <img className='rounded-3xl my-3 ml-3' src={img} alt="" />
                <h2 className='text-lg text-left m-3'>{name}</h2>
            </div>
            <p className='text-xl text-left m-3'>{body}</p>
            <p className='text-left m-3'>Ratings: <span className='text-orange-500'>{ratings}</span></p>
        </div>
    );
};

export default Review;