import React from 'react';
import auth from '../firebase/firebase.config';
import { signInWithGoogle, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';


const Login = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
  if (gUser) {
    // console.log(user.user.displayName)
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <div className='flex justify-center mt-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-bold">Welcome back!</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>
          <div className="">
            <button className="btn btn-dark w-80">Buy Now</button>
          </div>
        </div>
        <p className='text-center'>New to Copyright Boss? <span className='text-primary'><Link to='/register'>Sign up now!</Link></span></p>
          <div className="divider">OR</div>
      <div className="text-center">
      {/* <button className="btn btn-dark w-80 mb-6" onClick={() => signInWithGoogle()}>
        sign in
      </button> */}
      <div className="flex justify-evenly mb-6">
      <img className='social-images' src={Google} alt="" />
      <img className='social-images' src={Facebook} alt="" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;