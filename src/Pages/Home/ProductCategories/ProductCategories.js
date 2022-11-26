import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllCategories from './AllCategories';

const ProductCategories = () => {
    // const [products, setProducts] = useState([]);

    const { data: products = [] } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('http://localhost:5000/services')
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:4000/services')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])

    return (
        <div>
            <h5 className='text-center font-bold text-2xl text-green-600 mt-10'>All product categories</h5>
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