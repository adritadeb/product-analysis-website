import React from 'react';

const HeaderSection = () => {
    return (
        <div className='md:flex mx-14 mt-12 text-left'>
            <div>
                <h1 className='text-3xl font-semibold mb-7'>Skill Up</h1>
                <h2 className='text-4xl mb-6'>Up Your Skill With <span className='text-blue-400'>Skill Up</span></h2>
                <p>Skill Up contains more than 200+ courses. Many students are upgrading their skills with Skill Up. They are learning with a lot of fun and going through an enjoyable process. So, join with us for up your skill with fun.</p>
            </div>
            <img className='w-1/2 mt-14 ml-20' src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35647336.jpg" alt="" />
        </div>
    );
};

export default HeaderSection;