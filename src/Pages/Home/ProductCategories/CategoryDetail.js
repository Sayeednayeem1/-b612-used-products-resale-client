import React from 'react';

const CategoryDetail = ({ facilities, setCategoryDetails }) => {
    const { name, img, location, originalPrice, resalePrice, yearsOfUse, details } = facilities;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{details}</p>
                <div className="card-actions justify-evenly">
                    <div className="badge badge-outline">{location}</div>
                    <div className="badge badge-outline">$: {originalPrice}</div>
                    <div className="badge badge-outline">$: {resalePrice}</div>
                    <div className="badge badge-outline">Years of use: {yearsOfUse} Year</div>
                </div>
                <label
                    htmlFor="category-modal"
                    className="btn btn-primary text-white font-bold mt-4"
                    onClick={() => setCategoryDetails(facilities)}
                >Book Now</label>
            </div>
        </div>
    );
};

export default CategoryDetail;