import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || gitloading) {
        return <Loading></Loading>
    }

    if (error || giterror) {
        errorElement = <p className='text-danger'>Error: {error?.message} {giterror?.message}</p>
    }

    if (user || gituser) {

        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {
                errorElement
            }

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt=""></img>
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt=""></img>
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt=""></img>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;