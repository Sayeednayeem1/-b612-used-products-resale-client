import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllCategories from './AllCategories';

const ProductCategories = () => {

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('https://buy-sell-server-mu.vercel.app/services')
            .then(res => res.json())
    });

    if (isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    return (
        <div className='mt-16'>
            <h5 className='text-center font-bold text-3xl text-green-600 mt-10'>All product categories</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12'>
                {
                    products.map(product => <AllCategories

                        key={product._id}
                        product={product}

                    ></AllCategories>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;