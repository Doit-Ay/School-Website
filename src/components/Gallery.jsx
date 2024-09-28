import React from 'react';
import styles from './Gallery.module.css'; 
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';
import event5 from '../assets/images/event5.jpg';
import event6 from '../assets/images/event6.jpg';

const Gallery = () => {
  const images = [event1, event2, event3, event4, event5, event6]; 

  return (
    <section id="gallery" className={`container my-5 ${styles.gallerySection}`}>
      <h2 className="text-center mb-4">Gallery</h2>
      <div className={`row ${styles.galleryContainer}`}>
        {images.map((img, index) => (
          <div className={`col-lg-4 col-md-6 mb-4 ${styles.galleryItem}`} key={index}>
            <div className={`card ${styles.galleryCard}`}>
              <img src={img} alt={`Event ${index + 1}`} className={`card-img-top ${styles.galleryImage}`} />
              <div className="card-body">
                <p className="card-text">Event  {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-12 mb-4">
          <div className={`embed-responsive embed-responsive-16by9 ${styles.videoWrapper}`}>
          <iframe width="460" height="280" src="https://www.youtube.com/embed/gFjYhf2dKGg?si=gcuiEEjGSGH-CX5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
