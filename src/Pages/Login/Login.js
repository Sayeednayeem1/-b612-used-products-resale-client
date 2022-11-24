import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../assets/images/login.png'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='flex flex-col p-16 lg:flex-row-reverse justify-center items-center'>
            <div className='lg:ml-8'>
                <img src={login} alt="" className='' />
            </div>
            <div className='h-[400px] px-5 flex justify-center items-center shadow-lg'>
                <div>
                    <h4 className='text-4xl text-center'>Login</h4>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="text" className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <p>{data}</p>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;