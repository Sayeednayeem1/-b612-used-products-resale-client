import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import login from '../../assets/images/login.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            });
    };
    const handleGoogleSignUp = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className='flex flex-col p-16 lg:flex-row-reverse justify-center items-center'>
            <div className='lg:ml-8'>
                <img src={login} alt="" className='' />
            </div>
            <div className='h-[500px] px-5 flex justify-center items-center shadow-lg'>
                <div>
                    <h4 className='text-4xl text-center'>Login</h4>
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                        <input className='btn btn-primary w-full text-white font-bold' value='Login' type="submit" />
                        <div>
                            {loginError && <p className='text-orange-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p className='mt-2'>New to Amazing John? <Link className='text-orange-500' to='/signup'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignUp} className='btn btn-outline btn-primary w-full'> <FaGoogle className='mr-2 text-2xl'></FaGoogle> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;