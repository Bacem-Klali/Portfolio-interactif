import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand">Portfolio</div>

        <nav className="nav-links">
          {isLoggedIn && (
            <>
              <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
            </>
          )}
        </nav>

        <div className="nav-auth">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn">Logout</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
