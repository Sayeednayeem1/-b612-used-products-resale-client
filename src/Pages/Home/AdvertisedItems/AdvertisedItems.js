import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertisement from '../../../assets/images/advertisement.jpg';
import AdvertisementItem from './AdvertisementItem';

const AdvertisedItems = () => {


    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://buy-sell-server-mu.vercel.app/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-green-600 font-bold text-center mb-6'>Our Products Demo</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <AdvertisementItem
                        key={product._id}
                        product={product}
                    ></AdvertisementItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;