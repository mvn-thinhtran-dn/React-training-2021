import React from 'react';
import useAuth from '../../hooks/useAuth';

function Account(props) {
  const auth = useAuth()
  return (
    <div>
      <h1>This is Account page</h1>
      <button className="btn-action" onClick={ auth.logout }>Logout</button>
    </div>
  );
}

export default Account;