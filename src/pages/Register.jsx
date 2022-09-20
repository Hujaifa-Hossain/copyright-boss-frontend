import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Loading from '../shared/Loading';


const Register = () => {
  const [createUserWithEmailAndPassword, loading, error,] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate()

  if (loading || gLoading || updating) {
    return <Loading />
  }

  let signInError;

  if (error || gError || updateError) {
    signInError = <p className='text-red-600 text-sm my-3'>{error?.message || gError?.message || updateError?.message}</p>
  }

  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.mail, data.pass);
    await updateProfile({ displayName: data.name })
    reset()
    navigate('/login')
  };

  return (
    <div className='flex justify-center my-6'>
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold mb-2">Sign up now!</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">

              {/* <label className="label">
                <span className="label-text">Name</span>
              </label> */}

              <input type="text" placeholder="Your full name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is required'
                  }
                })} />

              <label className="label">
                <span className="label-text-alt">
                  {errors?.name?.type === 'required' && <p className='text-red-600'>{errors.name.message}</p>}
                </span>
              </label>

              {/* <label className="label">
                <span className="label-text">Email</span>
              </label> */}

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

              {/* <label className="label">
                <span className="label-text">Password</span>
              </label> */}

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
              <input className="btn btn-dark w-full max-w-xs" type='submit' value='Sign Up' />
            </div>
          </form>

        </div>
        <p className='text-center'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>

        <div className="divider px-6">OR</div>

        <div className="flex justify-evenly mb-6">
          <button className="rounded-full w-10" onClick={() => signInWithGoogle()}>
            <img src={Google} alt="Google log in button" />
          </button>
          <button className="rounded-full w-10" onClick={() => signInWithGoogle()}>
            <img src={Facebook} alt="Facebook log in button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;