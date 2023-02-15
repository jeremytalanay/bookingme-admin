import React, { useState } from 'react';

import style from './Login.module.css';

import Card from '../../ui/Card';
import Alert from '../../ui/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className={style.login}>
      <Card body={true}>
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login to Bookingme.ph Admin</h3>
          <Alert theme='danger'>Invalid Credentials</Alert>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block"><strong>Login</strong></button>
        </form>
      </Card>
    </div>
  );
};

export default Login;