import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/ordersSpecialty')
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                    const product = {
                        name: data.name,
                        email: data.email,
                        condition: data.condition,
                        price: data.price,
                        location: data.location,
                        image: imageData.data.url
                    }

                    // todo save product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then( result =>{
                        console.log(result);
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/myproducts');
                    })

                }
            });
    };

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    };



    return (
        <div >
            <h6 className='text-2xl font-bold mt-10 px-10'>Add a product..</h6>
            <div className='h-[600px] w-[400px] mt-10 px-10  shadow-lg'>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <select {...register("name", { required: 'name is required' })} className="select select-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option value={specialty.categoryName} key={specialty._id}>
                                    {specialty.categoryName}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input {...register("condition", { required: 'condition is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-orange-600'>{errors.condition?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: 'price is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-orange-600'>{errors.price?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: 'email is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-orange-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "location is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-orange-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input {...register("image", { required: 'photo is required' })} type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-orange-600'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full text-white font-bold mt-4' value='Add A product' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;