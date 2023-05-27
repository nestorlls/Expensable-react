import React from 'react';
import './Hero.css';

export const Hero = ({ title, children, alignTitle }) => {
  return (
    <section className="hero">
      {alignTitle === 'right' && children}
      <h1>{title}</h1>
      {alignTitle === 'left' && children}
    </section>
  );
};
