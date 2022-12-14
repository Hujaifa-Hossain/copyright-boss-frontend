import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { HiOutlineUserCircle } from 'react-icons/hi'
import {
  MdOutlineNaturePeople, MdOutlineVideoLibrary,
  MdLogout, MdOutlineDashboardCustomize
} from 'react-icons/md';
import { TbHeartHandshake } from 'react-icons/tb'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import useAdmin from '../hooks/useAdmin';

const Header = () => {
  const [user] = useAuthState(auth)

  const [admin] = useAdmin(user)

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  return (
    <div>
      <div className="navbar bg-base-100">

        <div className="navbar-start">
          <Link className='btn btn-ghost btn-circle' to='/'> <MdOutlineVideoLibrary />
          </Link>
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

              {user && <li>
                <p className="justify-between">
                  Hi {user?.displayName}
                  <span className="badge"><TbHeartHandshake /></span>
                </p>
              </li>}

              {admin && <li><Link to='dashboard'><MdOutlineDashboardCustomize />Dashboard</Link></li>}

              {user && user ? <li><button onClick={logout}><MdLogout />Log out</button></li> : <li><Link to='login'><MdOutlineNaturePeople />Log in</Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;