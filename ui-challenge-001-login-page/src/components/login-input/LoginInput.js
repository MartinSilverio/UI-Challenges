import React from 'react';
import './LoginInput.scss';

function LoginInput({ label, id, type, handleChange, name, value }) {
  return (
    <div className='login-input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default LoginInput;
