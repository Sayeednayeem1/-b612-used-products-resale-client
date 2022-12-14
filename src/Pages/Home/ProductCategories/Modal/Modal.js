import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Modal = ({ categoryDetails, setCategoryDetails }) => {
    const { name: orderName, location, resalePrice } = categoryDetails;
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const email = form.email.value;

        const order = {
            categoryName: orderName,
            buyerName: name,
            email,
            phone,
            price,
            location
        }
        console.log(order);

        fetch('https://buy-sell-server-mu.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCategoryDetails(null);
                    toast.success('Item is Booked!');
                }
            });

    }


    return (
        <div>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center text-green-600">Product Name: {orderName}</h3>
                    <form onSubmit={handleOrder} className='mt-10'>
                        <h1 className='text-2xl mb-2 text-green-600 ml-2'>Your Name</h1>
                        <input name='name' type="text" readOnly defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full mb-2 " />
                        <h1 className='text-2xl mb-2 text-green-600 ml-2'>Your Email</h1>
                        <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full mb-2 " />
                        <h1 className='text-2xl mb-2 text-green-600 ml-2'>Your Phone Number</h1>
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-2 " />
                        <h1 className='text-2xl mb-2 text-green-600 ml-2'>Location Of Buyer</h1>
                        <input name='location' type="text" readOnly value={location} className="input input-bordered w-full mb-2 " />
                        <h1 className='text-2xl mb-2 text-green-600 ml-2'>Price In $</h1>
                        <input name='price' type="text" readOnly value={resalePrice} placeholder='resale price' className="input input-bordered w-full mb-2 " />

                        <input className='btn btn-primary w-full text-white font-bold' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;