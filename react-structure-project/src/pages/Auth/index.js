import React from 'react';
import { Route } from 'react-router';
import Login from './Login';

function Auth(props) {
  return (
    <main className="page-main">
      <Route path="/">
        <Login />
      </Route>
    </main>
  );
}

export default Auth;