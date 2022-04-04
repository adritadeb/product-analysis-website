import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = ReviewData();

    return (
        <div>
            <h1 className='text-4xl my-16'>What our customers say!</h1>
            <div className='grid grid-cols-3 gap-3 m-12'>
                {
                    reviews.map(review => <Review keys={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;