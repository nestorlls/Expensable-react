import React, { useEffect, useState } from 'react';
import { getAllHosts } from '../../services/Host-service';
import { Card } from '../Card/Card';
import { Container } from '../Container/Container';
import { Grid } from '../Grid/Grid';

export const Hosts = () => {
  const [hosts, setHost] = useState([]);

  useEffect(() => {
    const fetchHosts = async () => {
      const data = await getAllHosts();
      setHost(data.results);
    };
    fetchHosts();
  }, []);

  return (
    <Container title={'Hosts'}>
      <Grid columns={4} rows='auto' gap='18px'>
        {hosts.map((host) => (
          <Card key={host.name}>
            <h2>{host.name}</h2>
            <div className='feature-group'>
              <div className='feature-item'>
                Birth year
                <p>{host.birth_year}</p>
              </div>
              <div className='feature-item'>
                Gender
                <p>{host.gender}</p>
              </div>
              <div className='feature-item'>
                Height
                <p>{host.height}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
