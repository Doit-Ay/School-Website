import React from 'react';
import styles from './ContactUs.module.css'; 

const ContactUs = () => {
  return (
    <section id="contact" className={`container my-5 ${styles.contactSection}`}>
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h4>Get in Touch</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name<span className={styles.required}>*</span></label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span className={styles.required}>*</span></label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message<span className={styles.required}>*</span></label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
