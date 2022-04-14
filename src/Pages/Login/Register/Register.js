import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        //console.log(event.target)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
        //console.log(name, email, password)
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' />

                <input type="email" name="email" placeholder='Email Address' required />

                <input type="password" name="password" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

            <SocialLogin></SocialLogin>
        </div>


    );

};

export default Register;