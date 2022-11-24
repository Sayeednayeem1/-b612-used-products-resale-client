import React from 'react';
import search from '../../../assets/images/search.png';
import fast from '../../../assets/images/fast.png';
import support from '../../../assets/images/support.png'
import PageDetail from './PageDetail';

const PageDetails = () => {
    const PageData = [
        {
            id: 1,
            name: 'Fast Performance',
            description: 'Our Performance is faster than ever. Delivery within 24 hours based on your location',
            icon: fast
        },
        {
            id: 2,
            name: 'SEO Friendly',
            description: 'Our website is smooth based on some users feedback. You can always provide your feedback to us',
            icon: search,
        },
        {
            id: 3,
            name: 'Support',
            description: 'We Provide 24 hours of support via email, phone and facebook. We are always ready in your service',
            icon: support
        }
    ]

    return (
        <div>
            <div className='grid mt-10 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    PageData.map(data => <PageDetail

                        key={data.id}
                        data={data}

                    ></PageDetail>)
                }
            </div>
        </div>
    );
};

export default PageDetails;