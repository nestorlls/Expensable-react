import React from 'react';
import './Container.css';

export const Container = ({ title, children }) => {
  return (
    <section className='container'>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
