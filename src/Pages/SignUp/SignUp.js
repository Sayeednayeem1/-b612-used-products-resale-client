import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login.png';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {})
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    };

    const handleGoogleSignUp = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className='flex flex-col p-16 lg:flex-row-reverse justify-center items-center'>
                <div className='lg:ml-8'>
                    <img src={login} alt="" className='' />
                </div>
                <div className='h-[550px] px-5 flex justify-center items-center shadow-lg'>
                    <div>
                        <h4 className='text-4xl text-center'>SignUp</h4>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: 'name is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-orange-600'>{errors.name?.message}</p>}
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: 'password must be 6 characters or longer' } })} type="password" className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-orange-600'>{errors.password?.message}</p>}
                            </div>
                            <input className='btn btn-primary w-full text-white font-bold mt-4' value='SignUp' type="submit" />
                        </form>
                        <p className='mt-2'>Already have an account? <Link className='text-orange-500' to='/login'>Please login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignUp} className='btn btn-outline btn-primary w-full'> <FaGoogle className='mr-2 text-2xl'></FaGoogle> SignUp with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;