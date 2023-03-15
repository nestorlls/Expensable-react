import React from 'react';
import './Grid.css';

export const Grid = ({ rows, columns, gap, children }) => {
  return (
    <div
      className='grid'
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: rows,
      }}
    >
      {children}
    </div>
  );
};
