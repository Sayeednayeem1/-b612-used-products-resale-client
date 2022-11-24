import React from 'react';

const PageDetail = ({data}) => {
    const {icon, name, description} = data;
    return (
        <div className='card md:card-side p-6 shadow-xl'>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PageDetail;