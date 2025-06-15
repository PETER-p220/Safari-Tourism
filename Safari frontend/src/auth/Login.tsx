import React from 'react';
import LoginForm from '../components/features/Auth/LoginForm';

const Login : React.FC = () => {
    return (
        <div className='flex items-center justify-center w-full h-dvh'>
            <LoginForm />
        </div>
    );
};

export default Login;