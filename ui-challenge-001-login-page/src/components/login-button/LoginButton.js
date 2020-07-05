import React from 'react';
import './LoginButton.scss';

function LoginButton({ text, handleButtonClick }) {
  return (
    <div className='login-button-container'>
      <button onClick={handleButtonClick}>{text}</button>
    </div>
  );
}

export default LoginButton;
