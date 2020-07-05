import React, { useState } from 'react';
import './LoginContainer.scss';
import '../login-input/LoginInput';
import LoginInput from '../login-input/LoginInput';
import LoginButton from '../login-button/LoginButton';

function LoginContainer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };
  const handleOnUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleLoginClick = (e) => {
    alert(`Logged in as ${username} with password ${password}`);
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <LoginInput
        id='username'
        label='Username'
        type='text'
        name='username'
        handleChange={handleOnUsernameChange}
        value={username}
      />
      <LoginInput
        id='password'
        label='Password'
        type='password'
        name='password'
        handleChange={handleOnPasswordChange}
        value={password}
      />
      <LoginButton text='Log In' handleButtonClick={handleLoginClick} />

      <a href='/'>Forgot your password?</a>
    </div>
  );
}

export default LoginContainer;
