import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/socialLogin/logo/google.png'
import './SocialLogin.css'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error:{error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='social-blank-div'></div>
                <p className=' or-text mt-2 px-2'>or</p>
                <div className='social-blank-div'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className=' button-style mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;