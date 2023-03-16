import './App.css';
import { Container } from './components/Container/Container';
import { Grid } from './components/Grid/Grid';
import { Hero } from './components/Hero/Hero';
import { Planets } from './components/Page/Planets';
import { SearchForm } from './components/SearchForm/SearchForm';

function App() {
  const callToAction = 'Look for the best space travels in the universe';

  return (
    <div>
      <Hero title={'Galaxy travel'} alignTitle={'right'}>
        <SearchForm ca={callToAction} />
      </Hero>
      <Planets />
      <Container title={'Hosts'}>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
