import './App.css';
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
        <Grid columns={4} rows='200px' gap='18px' />
      </Container>
      <Container title={'Hosts'}>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
