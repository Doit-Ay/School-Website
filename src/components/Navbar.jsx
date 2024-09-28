import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.navbarCustom} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <a className={`navbar-brand ${styles.brand}`} href="Home.jsx">
          Apna School
        </a>
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarSupportedContent">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navList}`}>
            <li className="nav-item">
              <Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={-70} duration={500} className={`nav-link ${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={-70} duration={500} className={`nav-link ${styles.navLink}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass={styles.active} to="academics" spy={true} smooth={true} offset={-70} duration={500} className={`nav-link ${styles.navLink}`}>
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass={styles.active} to="gallery" spy={true} smooth={true} offset={-70} duration={500} className={`nav-link ${styles.navLink}`}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass={styles.active} to="contact" spy={true} smooth={true} offset={-70} duration={500} className={`nav-link ${styles.navLink}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
