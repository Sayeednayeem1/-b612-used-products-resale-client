import React from 'react';
import login from '../../assets/images/login.png'

const Login = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img src={login} alt="" />
            </div>
            <div className='h-[800px] flex justify-center items-center'>
                <div>
                    <h4 className='text-4xl'>Login</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;