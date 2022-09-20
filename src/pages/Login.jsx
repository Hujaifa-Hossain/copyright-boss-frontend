import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Loading from '../shared/Loading';


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/';

  if (loading || gLoading) {
    return <Loading />
  };

  let signInError;

  if (error || gError) {
    signInError = <p className='text-red-600 text-sm my-3'>{error?.message || gError?.message}</p>
  };

  if(user || gUser){
    navigate(from, {replace: true})
  }

  const onSubmit = async data => {
    console.log(data)
    await signInWithEmailAndPassword(data.mail, data.pass)
    reset()
  };
  console.log(user);
  return (
    <div className='flex justify-center my-6'>
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold mb-2">Hello, Welcome back!</h2>


          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">

              <input type="email" placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("mail", {
                  required: {
                    value: true,
                    message: 'Email is required'
                  }, pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Provide a valid email'
                  }
                })} />

              <label className="label">
                <span className="label-text-alt">
                  {errors?.mail?.type === 'required' && <p className='text-red-600'>{errors.mail.message}</p>}
                  {errors?.mail?.type === 'pattern' && <p className='text-red-600'>{errors.mail.message}</p>}
                </span>
              </label>

              <input type="password" placeholder="Enter a password"
                className="input input-bordered w-full max-w-xs"
                {...register("pass", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  }, minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer'
                  }
                })} />

              <label className="label">
                <span className="label-text-alt">
                  {errors?.pass?.type === 'required' && <p className='text-red-600'>{errors.pass.message}</p>}
                  {errors?.pass?.type === 'minLength' && <p className='text-red-600'>{errors.pass.message}</p>}
                </span>
              </label>

              {signInError}
            </div>
            <div>
              <input className="btn btn-dark w-full max-w-xs" type='submit' value='Log In' />
            </div>
          </form>

        </div>
        <p className='text-center'>New to Copyright Boss? <Link className='text-primary' to='/register'>Sign up now!</Link></p>

        <div className="divider px-6">OR</div>

        <div className="flex justify-evenly mb-6">
          <button className="rounded-full w-10" onClick={() => signInWithGoogle()}>
            <img src={Google} alt="Google login button" />
          </button>
          <button className="rounded-full w-10" onClick={() => signInWithGoogle()}>
            <img src={Facebook} alt="Facebook login button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;