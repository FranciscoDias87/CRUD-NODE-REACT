import React from 'react';

const UserTable = props => (
  <table className='responsive-table'>
    <thead>
      <tr>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {
        props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td className='center-align'>
                <button
                  className='waves-effect waves-light btn-small'
                  onClick={() => props.editRow(user)}>Edit
                </button>

                <button
                  className='waves-effect waves-light btn-small red darken-4'
                  onClick={() => props.deleteUser(user.id)}>Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>{props.users[0]}NO USERS</td>
          </tr>
        )
      }

    </tbody>
  </table>
);

export default UserTable;