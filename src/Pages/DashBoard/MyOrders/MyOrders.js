import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://buy-sell-server-mu.vercel.app/orders?email=${user?.email}`;

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <progress className="progress w-56"></progress>;
    }


    return (
        <div>
            <h5 className='text-2xl mb-5'>My Orders</h5>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>product Name</th>
                            <th>price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, x) => <tr key={order._id}>
                                <th>{x+1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.categoryName}</td>
                                <td>$: {order.price}</td>
                                <td>{order.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;