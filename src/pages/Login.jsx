import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { signInWithGoogle, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';


const Login = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex justify-center mt-6'>
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-xl font-bold">Welcome back!</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input type="email" placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("mail", {
                  required: {
                    value: true,
                    message: 'Email is required'
                  }, pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Enter a valid email'
                  }
                })}/>

              <label className="label">
                <span className="label-text-alt">
                {errors?.mail?.type === 'required' && <p className='text-red-600'>{errors.mail.message}</p>}
                  {errors?.mail?.type === 'pattern' && <p className='text-red-600'>{errors.mail.message}</p>}
                </span>
              </label>

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input type="password" placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                {...register("pass", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  }, minLength: {
                    value: 6,
                    message: 'Must be 6 character or longer'
                  }
                })} />

              <label className="label">
                <span className="label-text-alt">
                  {errors?.pass?.type === 'required' && <p className='text-red-600'>{errors.pass.message}</p>}
                  {errors?.pass?.type === 'minLength' && <p className='text-red-600'>{errors.pass.message}</p>}
                </span>
              </label>

            </div>
            <div className="">
              <input className="btn btn-dark w-full max-w-xs" type='submit' value='Login' />
            </div>
          </form>

        </div>
        <p className='text-center'>New to Copyright Boss? <Link className='text-primary' to='/register'>Sign up now!</Link></p>

        <div className="divider">OR</div>

        <div className="flex justify-evenly mb-6">
          <button className="rounded-full w-12" onClick={() => signInWithGoogle()}>
            <img src={Google} alt="Google login button" />
          </button>
          <button className="rounded-full w-12" onClick={() => signInWithGoogle()}>
            <img src={Facebook} alt="Facebook login button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;