import React from 'react';
import banner from '../../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero shadow-lg mt-10 px-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Amazing John!</h1>
                        <p className="py-6">Welcome tp Amazing John official website. We provide second hand and used products with the best rate possible</p>
                        <button className='btn btn-primary font-bold px-8 text-white'>Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;