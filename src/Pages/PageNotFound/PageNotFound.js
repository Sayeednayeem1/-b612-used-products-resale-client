import React from 'react';
import pageNotFound from '../../assets/images/Page-404.jpg'

const PageNotFound = () => {
    return (
        <div>
            <div className="hero shadow-lg mt-36 px-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={pageNotFound} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-center text-orange-600">404! page not found!</h1>
                        <p className="py-6 text-center text-orange-600">Please try again providing a better route. Thank You!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;