import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Klali Bacem</div>
        <div>contact@example.com</div>
      </div>
    </footer>
  );
};

export default Footer;
