import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

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
              <th>Email</th>
              <th>Status</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {users && users?.map(user => <UserRow key={user._id} user={user} refetch={refetch} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;