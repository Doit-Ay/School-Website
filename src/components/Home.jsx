import React from 'react';
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <section id="home" className={`d-flex align-items-center ${styles.homeSection}`}>
      <div className="container text-center text-white">
        <h1 className={styles.title}>Welcome to Apna School</h1>
        <p className={styles.subtitle}>Empowering Future Leaders through Excellence in Education</p>
      </div>
     
    </section>
  );
};

export default Home;
