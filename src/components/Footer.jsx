import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={`bg-dark text-white py-4 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Apna School</h5>
            <p>
              Apna School is dedicated to providing a nurturing and challenging environment where students can thrive academically, socially, and personally.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#academics" className="text-white">Academics</a></li>
              <li><a href="#gallery" className="text-white">Gallery</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Connect with Us</h5>
            <p>
              <strong>Address:</strong><br />
              Near SRM University<br />
              Chennai,Tamil Nadu
            </p>
            <p>
              <strong>Phone:</strong><br />
              00000 00000<br />
              00000 00000
            </p>
            <p>
              <strong>Email:</strong><br />
              contact@schoolname.edu<br />
              admissions@schoolname.edu
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Apna School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
