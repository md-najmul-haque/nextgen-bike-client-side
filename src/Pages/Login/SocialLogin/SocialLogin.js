import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (gError || gitError) {
        errorElement = <p className='text-danger'>Error:{gError?.message}||{gitError?.message}</p>
    }

    if (gLoading || gitLoading) {
        return <Loading />
    }

    if (gUser || gitUser) {
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
                    className='button-style mx-auto d-flex justify-content-center align-items-center'>
                    <FcGoogle />
                    <span className='px-2'>Sing In with Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='button-style mx-auto d-flex justify-content-center align-items-center'>
                    <BsGithub />
                    <span className='px-2'>Sing In with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;