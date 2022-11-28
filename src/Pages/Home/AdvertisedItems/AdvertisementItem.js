import React from 'react';

const AdvertisementItem = ({ product }) => {
    const { image, name, condition, location, price } = product;
    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span className='text-green-600'>Condition of the product</span>: {condition}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Location: {location}</div>
                    <div className="badge badge-outline">Price: ${price}</div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementItem;