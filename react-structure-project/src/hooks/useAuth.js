import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('account'));
  const [isLogged, setIsLogged] = useState(!!user);

  const history = useHistory();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('account', JSON.stringify({email}));
        setUser({email})
        setIsLogged(true)
        history.push('/account')
      }, 1000)
    })
  }

  const logout = () => {
    localStorage.removeItem('account')
    setIsLogged(false)
    history.push('/')
  }
  return {login, isLogged, logout};
};

export default useAuth;