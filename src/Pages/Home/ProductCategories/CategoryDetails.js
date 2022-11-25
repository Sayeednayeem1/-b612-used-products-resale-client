import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import Modal from './Modal/Modal';

const CategoryDetails = () => {
    const { facility } = useLoaderData();
    const [categoryDetails, setCategoryDetails] = useState(null);

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12'>
                {
                    facility.map((facilities, x) => <CategoryDetail

                        key={x}
                        facilities={facilities}
                        setCategoryDetails={setCategoryDetails}

                    ></CategoryDetail>)
                }
            </div>
            {
                categoryDetails &&
                <Modal
                    categoryDetails={categoryDetails}
                ></Modal>}
        </section>
    );
};

export default CategoryDetails;