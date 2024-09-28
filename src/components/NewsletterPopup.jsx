import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './NewsletterPopup.module.css'; 

Modal.setAppElement('#root');

const NewsletterPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const hasSubscribed = localStorage.getItem('hasSubscribed');
    if (!hasSubscribed) {
      const timer = setTimeout(() => {
        setModalIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setModalIsOpen(false);
    localStorage.setItem('hasSubscribed', 'true');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Subscribe to Newsletter"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={closeModal} className={styles.closeButton} aria-label="Close Newsletter Subscription">
        &times;
      </button>
      <h2 className={styles.modalTitle}>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="newsletter-email">Email address</label>
          <input
            type="email"
            className="form-control" 
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className={`btn ${styles.submitButton}`}>
          Subscribe
        </button>
      </form>
    </Modal>
  );
};

export default NewsletterPopup;
