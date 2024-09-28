import React from 'react';
import styles from './Testimonials.module.css'; 
import student1 from '../assets/images/student1.jpg';
import student2 from '../assets/images/student2.jpg';
import alumni1 from '../assets/images/alumni1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Saurav Bakshi',
      role: 'Student',
      image: student1,
      feedback: 'Attending [School Name] has been a transformative experience. The teachers are dedicated and the environment is supportive.',
    },
    {
      name: 'Sonu Mishra',
      role: 'Parent',
      image: student2,
      feedback: 'My child has flourished academically and personally since joining [School Name]. We are grateful for the excellent education provided.',
    },
    {
      name: 'Lalli Gupta',
      role: 'Alumnus',
      image: alumni1,
      feedback: 'The foundation I received at [School Name] prepared me well for university and beyond. I highly recommend it to prospective students.',
    },
  ];

  return (
    <section className={`container my-5 ${styles.testimonialsSection}`}>
      <h2 className="text-center mb-4">What Our Community Says</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card ${styles.testimonialCard}`}>
              <img src={testimonial.image} className={`card-img-top ${styles.testimonialImage}`} alt={testimonial.name} />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{testimonial.role}</h6>
                <p className="card-text">"{testimonial.feedback}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
