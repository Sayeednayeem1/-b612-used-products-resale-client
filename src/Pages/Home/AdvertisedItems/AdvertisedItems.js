import React from 'react';
import Advertisement from '../../../assets/images/advertisement.jpg';

const AdvertisedItems = () => {
    return (
        <div className="hero shadow-lg mt-10 px-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Advertisement} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">ASUS VivoBook</h1>
                    <p className="py-6">Overall, the Asus Vivobook 15 (X1502) offers decent performance, <br/> and I feel the laptop is a good choice for students. <br/> It looks modern, and it comes with many features (like fingerprint sensor and Wi-Fi 6) that might attract young customers.</p>
                    <button className='btn btn-primary font-bold px-8 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;