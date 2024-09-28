import React from 'react';
import styles from './Extracurricular.module.css';
import club1 from '../assets/images/club1.jpg';
import club2 from '../assets/images/club2.jpg';
import club3 from '../assets/images/club3.jpg';

const Extracurricular = () => {
  const clubs = [
    {
      name: 'Robotics Club',
      image: club1,
      description: 'Engage in hands-on projects and competitions to build and program robots.',
    },
    {
      name: 'Drama Society',
      image: club2,
      description: 'Explore your passion for acting, directing, and stage production.',
    },
    {
      name: 'Art Club',
      image: club3,
      description: 'Express your creativity through various art mediums and exhibitions.',
    },
  ];

  return (
    <section className={`container my-5 ${styles.extracurricularSection}`}>
      <h2 className="text-center mb-4">Extracurricular Activities</h2>
      <div className="row">
        {clubs.map((club, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card ${styles.clubCard}`}>
              <img src={club.image} className={`card-img-top ${styles.clubImage}`} alt={club.name} />
              <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text">{club.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
