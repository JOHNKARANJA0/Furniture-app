import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import NavBar from "./NavBar";
import About from './About';

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();
    if(username==='admin' && password==='password123') {
    setIsLoggedIn(true);
    setUsername(username);
    setPassword(password);
    navigate('/', { state: { isLoggedIn: true } });
    <About isLoggedIn={isLoggedIn}/>
  }
    else { alert('wrong password or username')}
  };
  console.log(isLoggedIn)
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('User has been logged out.');
  };

  return (
    <>
    <header>
          <NavBar isLoggedIn={isLoggedIn}/>
      </header>
    <div className='login-container'>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          {isLoggedIn ? <button onClick={handleLogout}>Logout</button>:<button type="submit">login</button>}
        </form>
    </div>
    </>
  );
}

export default LoginPage;