import React, { useState } from 'react';
import './SearchForm.css';

export const SearchForm = ({ ca, data, onSearchPlanets }) => {
  const [name, setName] = useState('');
  const [terrain, setTerrain] = useState('');
  const [climate, setClimate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !terrain && !climate) {
      onSearchPlanets([]);
      return;
    }
    
    const hasName =
      name.length >= 1
        ? data.filter((planet) =>
            planet.name.toLowerCase().includes(name.toLowerCase())
          )
        : data;

    const hasTerrain =
      terrain.length >= 1
        ? hasName.filter((planet) =>
            planet.terrain.toLowerCase().includes(terrain.toLowerCase())
          )
        : hasName;

    const hasClimate =
      climate.length >= 1
        ? hasTerrain.filter((planet) =>
            planet.climate.toLowerCase().includes(climate.toLowerCase())
          )
        : hasTerrain;

    onSearchPlanets(hasClimate);
  };

  return (
    <form className='form-search' onSubmit={handleSubmit}>
      <p>{ca}</p>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          id='name'
        />
      </div>
      <div>
        <label htmlFor='terrain'>Terrain</label>
        <input
          type='text'
          value={terrain}
          onChange={(e) => setTerrain(e.target.value)}
          name='terrain'
          id='terrain'
        />
      </div>
      <div>
        <label htmlFor='climate'>Climate</label>
        <input
          type='text'
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          name='climate'
          id='climate'
        />
      </div>
      <button>Help me to search</button>
    </form>
  );
};
