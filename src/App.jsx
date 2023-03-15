import './App.css';
import { Card } from './components/Card/Card';
import { Container } from './components/Container/Container';
import { Grid } from './components/Grid/Grid';
import { Hero } from './components/Hero/Hero';
import { SearchForm } from './components/SearchForm/SearchForm';

function App() {
  const callToAction = 'Look for the best space travels in the universe';

  return (
    <div>
      <Hero title={'Galaxy travel'} alignTitle={'right'}>
        <SearchForm ca={callToAction} />
      </Hero>
      <Container title={'Planets'}>
        <Grid columns={4} rows='auto' gap='18px'>
          <Card>
            <h2>Tatooine</h2>
            <div className='horizontal-group'>
              <p>Rotation: 23</p>
              <p>Orbital: 304</p>
              <p>Diameter: 10465</p>
            </div>

            <div className='feature-group'>
              <div className='feature-item'>
                Climate
                <p>arid</p>
              </div>
              <div className='feature-item'>
                Gravity
                <p>1 standard</p>
              </div>
              <div className='feature-item'>
                Terrain
                <p>desert</p>
              </div>
            </div>
            <p className='center'>Population</p>
            <p className='center text-big margin-0'>200.000</p>
          </Card>
        </Grid>
      </Container>
      <Container title={'Hosts'}>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
