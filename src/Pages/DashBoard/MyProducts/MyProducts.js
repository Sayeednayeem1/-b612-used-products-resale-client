import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);

    const cancelModal = () => {
        setDeleteProduct(null);
    };


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
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

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0 ) {
                    refetch()
                    toast.success('Product Deleted Successfully');
                }
            })
    };

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    };


    return (
        <div>
            <h5 className='text-2xl font-bold mt-10'>All My Products Are here: {products?.length}</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <th></th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>{product.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{product.condition}</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">$:{product.price}</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{product.location}</button>
                                </th>
                                <th>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct &&
                <ConfirmationModal
                    title={`Are You sure you want to delete?`}
                    message={`If you delete ${deleteProduct.name} it cant be recovered.`}
                    cancelModal={cancelModal}
                    handleDeleteProduct={handleDeleteProduct}
                    modalData={deleteProduct}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;