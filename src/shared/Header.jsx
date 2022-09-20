import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { HiOutlineMenuAlt2, HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi'
import { MdOutlineNaturePeople } from 'react-icons/md'
import { BiVideoPlus } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const Header = () => {
  const [user] = useAuthState(auth)

  console.log(user?.displayName)
  
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <HiOutlineMenuAlt2 />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'> <HiOutlineHome />
                  Home page
                </Link>
              </li>
              <li><Link to='login'><MdOutlineNaturePeople />Log In</Link></li>
              {/* <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Terms & conditions
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to='/' className="normal-case text-1xl font-bold">Copyright Boss</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <HiOutlineUserCircle/>
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li> */}
              {user ? <li><button onClick={logout}><MdOutlineNaturePeople />Log out</button></li> : <li><Link to='login'><MdOutlineNaturePeople />Log in</Link></li>}
              <li><Link to='create'><BiVideoPlus />Create</Link></li>
              <li>{user?.displayName}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;