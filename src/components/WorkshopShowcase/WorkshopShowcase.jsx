import React from 'react';
import './WorkshopShowcase.css';

const workshopImages = [
  'Aiskillup-workshop (1).jpeg',
  'Aiskillup-workshop (2).jpeg',
  'Aiskillup-workshop (3).jpeg',
  'Aiskillup-workshop (4).jpeg',
  'Aiskillup-workshop (5).jpeg',
  'Aiskillup-workshop (6).jpeg',
  'Aiskillup-workshop (7).jpeg',
  'Aiskillup-workshop (8).jpeg'
];

const WorkshopShowcase = () => (
  <section className="workshop" id="workshop-presentation">
    <div className="workshop__header">
      <p className="workshop__eyebrow">This is the Presentation</p>
      <h2>Using AI to make PowerPoint & Excel work easy for the Railway Department, Coimbatore</h2>
      <p className="workshop__lead">One streamlined showcase of how AI tools helped the railway team prepare decks and trackers faster.</p>
    </div>

    <div className="workshop__gallery">
      {workshopImages.map((img, index) => (
        <figure key={img} className="workshop__card">
          <img
            src={`/images/workshop/${img}`}
            alt={`AI Skill Up workshop presentation ${index + 1}`}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  </section>
);

export default WorkshopShowcase;
