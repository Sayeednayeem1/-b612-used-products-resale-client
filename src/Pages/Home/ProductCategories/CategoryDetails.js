import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const {facility} = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12'>
            {
                facility.map((facilities, x) => <CategoryDetail
                
                    key={x}
                    facilities={facilities}

                ></CategoryDetail>)
            }
        </div>
    );
};

export default CategoryDetails;