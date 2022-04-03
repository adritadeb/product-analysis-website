import React from 'react';
import { Link } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = ReviewData();

    const reviewPath = useNavigate();

    const handleAllReviews = () => {
        reviewPath('/reviews');
    }

    return (
        <div>
            <h1 className='text-4xl my-16'>Customer Reviews(3)</h1>
            <div className='grid grid-cols-3 gap-3 mx-12'>
                {
                    reviews.map(review => <Review keys={review.id} review={review}></Review>)
                }
            </div>
            <button onClick={handleAllReviews} className='text-white bg-blue-600 rounded-md px-16 py-2 m-8'>See All Reviews</button>
        </div>
    );
};

export default Reviews;