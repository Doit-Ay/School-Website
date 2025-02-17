import React from 'react';
import styles from './AboutUs.module.css'; 
import leadership1 from '../assets/images/leadership1.jpg';
import leadership2 from '../assets/images/leadership2.jpg';
import leadership3 from '../assets/images/leadership3.jpg';

const AboutUs = () => {
  const leadership = [
    {
      name: 'Shorya Mishra',
      position: 'Principal',
      image: leadership1,
      bio: 'John has over 10 years of experience in education, dedicated to fostering a nurturing and challenging environment for students.',
    },
    {
      name: 'Vidisha Gupta',
      position: 'Vice Principal',
      image: leadership2,
      bio: 'Jane specializes in curriculum development and ensures that our academic programs meet the highest standards.',
    },
    {
      name: 'Lakshya',
      position: 'Head of Academics',
      image: leadership3,
      bio: 'Emily is passionate about integrating technology into the classroom to enhance learning experiences.',
    },
  ];

  return (
    <section id="about" className={`container my-5 ${styles.aboutSection}`}>
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Our History</h4>
          <p>
            Established in 2024, Apna School has been committed to providing quality education and fostering a community of learners.
            Over the years, we have grown into a vibrant institution known for academic excellence and holistic development.
          </p>
          <h4>Our Mission</h4>
          <p>
            To empower students with the knowledge, skills, and values necessary to succeed in an ever-changing world.
          </p>
          <h4>Our Vision</h4>
          <p>
            To be a leading educational institution recognized for innovative teaching, research, and community engagement.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Leadership Team</h4>
          <div className="row">
            {leadership.map((member, index) => (
              <div className="col-md-12 mb-4" key={index}>
                <div className={`card ${styles.leadershipCard}`}>
                  <div className="row no-gutters">
                    <div className="col-4">
                      <img src={member.image} className="card-img" alt={member.name} />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{member.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{member.position}</h6>
                        <p className="card-text">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
