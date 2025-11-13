import React from 'react';
import '../styles/home.css';
import pdp from './pdp.jpg';
const Home = () => {
  return (
    <div className="home-page">
      <div className="card">
        <div><img src={pdp} alt="" /></div>
        <div className="info">
          <h1>Klali Bacem</h1>
          <p className="role">Student / Frontend Developer</p>
          <p>
            Je suis étudiante en ISGB dans la filière informatique de gestion. Ce portfolio présente mes projets et mes competances.
          </p>
          <div className="skills">
            <strong>Competances:</strong>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
