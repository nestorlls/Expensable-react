import React, { useEffect, useState } from 'react';
import { getAllPlanets } from '../../services/Planet_service';
import { formatNumber } from '../../utils/format-number';
import { Card } from '../Card/Card';
import { Container } from '../Container/Container';
import { Grid } from '../Grid/Grid';

export const Planets = () => {
  const [next, setNext] = useState(null);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getAllPlanets();
      setPlanets(data.results);
      setNext(data.next);
    };
    fetchPlanets();
  }, []);

  return (
    <Container title={'Planets'}>
      <Grid columns={4} rows='auto' gap='18px'>
        {planets.map((planet) => (
          <Card key={planet.name}>
            <h2>{planet.name}</h2>
            <div className='horizontal-group'>
              <p>Rotation: {planet.rotation_period}</p>
              <p>Orbital: {planet.orbital_period}</p>
              <p>Diameter: {planet.diameter}</p>
            </div>

            <div className='feature-group'>
              <div className='feature-item'>
                Climate
                <p>{planet.climate}</p>
              </div>
              <div className='feature-item'>
                Gravity
                <p>{planet.gravity}</p>
              </div>
              <div className='feature-item'>
                Terrain
                <p>{planet.terrain}</p>
              </div>
              <div className='feature-item'>
                Surface water
                <p>{planet.surface_water}</p>
              </div>
            </div>
            <p className='center'>Population</p>
            <p className='center text-big margin-0'>
              {parseInt(planet.population) > 0
                ? formatNumber(planet.population)
                : planet.population}
            </p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
