import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdOutlineNaturePeople, MdOutlineVideoLibrary, MdLogout } from 'react-icons/md'
import { BiVideoPlus } from 'react-icons/bi'
import { TbHeartHandshake } from 'react-icons/tb'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const Header = () => {
  const [user] = useAuthState(auth)

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <ul>
            <li className='btn btn-ghost btn-circle'>
              <Link to='/'> <MdOutlineVideoLibrary />
              </Link>
            </li>
          </ul>
          
        </div>
        <div className="navbar-center">
          <Link to='/' className="normal-case text-1xl font-bold">Copyright Boss</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                {user && user?.photoURL ? <img className='rounded-full p-3 w-6' src={user?.photoURL} alt="" /> : <HiOutlineUserCircle />}
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

              {user  && <li>
                <p className="justify-between">
                 Hi {user?.displayName}
                  <span className="badge"><TbHeartHandshake/></span>
                </p>
              </li>}

              <li><Link to='create'><BiVideoPlus />Create</Link></li>

              {user && user ? <li><button onClick={logout}><MdLogout />Log out</button></li> : <li><Link to='login'><MdOutlineNaturePeople />Log in</Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;