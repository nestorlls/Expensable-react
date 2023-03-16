import './App.css';
import { Hero } from './components/Hero/Hero';
import { Hosts } from './components/Page/Host';
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
      <Hosts />
    </div>
  );
}

export default App;
