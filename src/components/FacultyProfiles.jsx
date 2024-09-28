import React from 'react';
import styles from './FacultyProfiles.module.css'; 
import faculty1 from '../assets/images/faculty1.jpg';
import faculty2 from '../assets/images/faculty2.jpg';
import faculty3 from '../assets/images/faculty3.jpg';
import faculty4 from '../assets/images/faculty4.jpg';

const FacultyProfiles = () => {
  const facultyMembers = [
    {
      name: 'Dr.V.Raja',
      subject: 'Mathematics',
      image: faculty1,
      bio: 'He holds a Ph.D. in Mathematics and has been teaching at Apna School for over 10 years.',
    },
    {
      name: 'Mrs. Babeetha S',
      subject: 'English Literature',
      image: faculty2,
      bio: 'She specializes in contemporary literature and encourages students to explore diverse literary voices.',
    },
    {
      name: 'Mr. Saurabh Singh',
      subject: 'Science',
      image: faculty3,
      bio: 'With a background in Environmental Science, He integrates real-world applications into her teaching.',
    },
    {
      name: 'Dr. C. Muralidharan',
      subject: 'History',
      image: faculty4,
      bio: 'He is dedicated to bringing history to life, making it engaging and relevant for her students.',
    },
  ];

  return (
    <section className={`container my-5 ${styles.facultySection}`}>
      <h2 className="text-center mb-4">Our Dedicated Faculty</h2>
      <div className="row">
        {facultyMembers.map((faculty, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className={`card ${styles.facultyCard}`}>
              <img src={faculty.image} className={`card-img-top ${styles.facultyImage}`} alt={faculty.name} />
              <div className="card-body">
                <h5 className="card-title">{faculty.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{faculty.subject}</h6>
                <p className="card-text">{faculty.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyProfiles;
