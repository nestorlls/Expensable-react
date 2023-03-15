import React from 'react';
import './SearchForm.css';

export const SearchForm = ({ca}) => {
  return (
    <form className='form-search'>
      <p>{ ca}</p>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />
      </div>
      <div>
        <label htmlFor='terrain'>Terrain</label>
        <input type='text' name='terrain' id='terrain' />
      </div>
      <div>
        <label htmlFor='climate'>Climate</label>
        <input type='text' name='climate' id='climate' />
      </div>
      <button>Help me to search</button>
    </form>
  );
};
