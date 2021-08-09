import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [formLogin, setFormLogin] = useState({email: '', password: ''});
  const auth = useAuth();

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setFormLogin({...formLogin, [name]:value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(formLogin.email, formLogin.password)
  }

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div className="form-control">
          <input name="email" type="text" placeholder="Email" onChange={handleOnChange}/>
        </div>
        <div className="form-control">
          <input name="password" type="password" placeholder="Password" onChange={handleOnChange}/>
        </div>
        <div className="form-action">
          <button>Submit</button>
        </div>
      </form>      
    </>
  );
};

export default Login;