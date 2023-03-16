import { useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { Hosts } from './components/Page/Host';
import { Planets } from './components/Page/Planets';
import { SearchResults } from './components/Page/SearchResults';
import { SearchForm } from './components/SearchForm/SearchForm';

function App() {
  const callToAction = 'Look for the best space travels in the universe';

  const [searchPlanets, setSearchPlanets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Hero title={'Galaxy travel'} alignTitle={'right'}>
        <SearchForm
          ca={callToAction}
          data={searchPlanets}
          onSearchPlanets={setSearchResults}
        />
      </Hero>
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          <Planets onUpdatePlanets={setSearchPlanets} />
          <Hosts />
        </>
      )}
    </div>
  );
}

export default App;
