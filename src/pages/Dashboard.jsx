import React from 'react';
import { BiVideoPlus, BiUser } from 'react-icons/bi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className='px-2'>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-circle drawer-button md:hidden"><HiOutlineMenuAlt2 /></label>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">

            <li className='items-end'>
              <label htmlFor="dashboard-drawer" className="lg:hidden btn btn-dark text-white btn-sm btn-circle">✕</label>
            </li>

            <li><Link to='/dashboard'><MdOutlineDashboardCustomize />Dashboard</Link></li>
            <li><Link to='create'><BiVideoPlus />Create</Link></li>
            <li><Link to='users'><BiUser/>Users</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;