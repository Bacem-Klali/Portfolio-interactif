import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [motdepasse, setmotdepasse] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email || !motdepasse) {
      setError('Please enter both email and motdepasse.');
      return;
    }
    const ok = login(email, motdepasse);
    if (ok) {
      navigate('/home');
    } else {
      setError('Login failed.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={submit}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe
          <input type="motdepasse" value={motdepasse} onChange={e => setmotdepasse(e.target.value)} />
        </label>
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
