import React from 'react';
import auth from '../firebase/firebase.config';
import { signInWithGoogle, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user)
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>
        sign in
      </button>
    </div>
  );
};

export default Login;