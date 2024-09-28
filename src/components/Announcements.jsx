import React from 'react';
import styles from './Announcements.module.css';

const Announcements = () => {
  const announcements = [
    {
      title: 'Spring Festival',
      date: '2024-05-15',
      summary: 'Join us for the annual spring festival with games, food, and performances.',
      link: '#',
    },
    {
      title: 'New Library Opening',
      date: '2024-06-01',
      summary: 'We are excited to announce the opening of our new state-of-the-art library.',
      link: '#',
    },
    {
      title: 'Parent-Teacher Meetings',
      date: '2024-07-20',
      summary: 'Schedule your meetings with teachers to discuss your child’s progress.',
      link: '#',
    },
  ];

  return (
    <section id="announcements" className={`container my-5 ${styles.announcementsSection}`}>
      <h2 className="text-center mb-4">Latest Announcements</h2>
      <div className="row">
        {announcements.map((announcement, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card ${styles.announcementCard}`}>
              <div className="card-body">
                <h5 className="card-title">{announcement.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{announcement.date}</h6>
                <p className="card-text">{announcement.summary}</p>
                <a href={announcement.link} className="card-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
