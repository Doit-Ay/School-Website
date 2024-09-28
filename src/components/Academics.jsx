import React from 'react';
import styles from './Academics.module.css';
import studyMaterial1 from '../assets/study-materials/material1.pdf';
import studyMaterial2 from '../assets/study-materials/material2.pdf';
import studyMaterial3 from '../assets/study-materials/material3.pdf';

const Academics = () => {
  const timetable = [
    { period: '1', time: '08:00 - 09:00', subject: 'Mathematics' },
    { period: '2', time: '09:00 - 10:00', subject: 'English Literature' },
    { period: '3', time: '10:15 - 11:15', subject: 'Science' },
    { period: '4', time: '11:30 - 12:30', subject: 'History' },
    { period: '5', time: '13:30 - 14:30', subject: 'Physical Education' },
    { period: '6', time: '14:45 - 15:45', subject: 'Art & Design' },
  ];

  const studyMaterials = [
    { name: 'Advanced Algebra', file: studyMaterial1 },
    { name: 'Shakespearean Plays', file: studyMaterial2 },
    { name: 'Physics Principles', file: studyMaterial3 },
  ];

  return (
    <section id="academics" className={`container my-5 ${styles.academicsSection}`}>
      <h2 className="text-center mb-4">Academics</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Our Curriculum</h4>
          <p>
            Apna School offers a comprehensive curriculum designed to meet the diverse needs of our students.
            Our programs emphasize critical thinking, creativity, and practical application to prepare students for future challenges.
          </p>
          <h5>Core Subjects</h5>
          <ul>
            <li>Mathematics</li>
            <li>English Literature</li>
            <li>Science</li>
            <li>History</li>
            <li>Physical Education</li>
            <li>Art & Design</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Class Timetable</h4>
          <table className={`table table-striped ${styles.timetable}`}>
            <thead className="thead-dark">
              <tr>
                <th>Period</th>
                <th>Time</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((period, index) => (
                <tr key={index}>
                  <td>{period.period}</td>
                  <td>{period.time}</td>
                  <td>{period.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="mt-4">Study Materials</h4>
          <ul className="list-group">
            {studyMaterials.map((material, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {material.name}
                <a href={material.file} download className="btn btn-sm btn-primary">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Academics;
