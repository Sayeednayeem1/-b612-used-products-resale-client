import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = ({ product }) => {
    const { title, img, description, _id } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <Link className="btn btn-primary text-white" to={`/categoryDetails/${_id}`}>{title}</Link>
                </div>
            </div>
        </div>
    );
};

export default AllCategories;