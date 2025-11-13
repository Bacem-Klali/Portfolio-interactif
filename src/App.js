import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>

      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;
