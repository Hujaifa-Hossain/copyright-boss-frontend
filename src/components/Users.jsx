import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';

const Users = () => {
  const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;